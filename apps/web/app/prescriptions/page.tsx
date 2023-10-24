import { Container, HeaderLogo } from 'ui';
import styles from '../page.module.css';
import Link from 'next/link';
import { t } from 'libs';
import { PrescriptionsDTO } from 'types';
import clsx from 'clsx';

const getPrescriptions = async () => {
  const response = await fetch('http://localhost:3100/api/v1/prescriptions');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

/**
 * TODO: In the real world, prescriptions data would only be accessible
 * through authenticated client routes. For the purposes of this demo I
 * am using Next.js to fetch the data from the mock API on the server. This logic
 * should be moved to client side data fetching/dynamic routing
 */

export default async function Page(): Promise<JSX.Element> {
  const prescriptions = (await getPrescriptions()) as PrescriptionsDTO[];
  return (
    <>
      <Link href="/">
        <HeaderLogo
          className={styles.header}
          logoClassName={styles.logo}
          title={t('global.title')}
        />
      </Link>

      <main className={styles.main}>
        <Container className={styles.container}>
          <h2 className={styles.pageTitle}>{t('prescriptions.title')}</h2>
        </Container>

        {!prescriptions.length && (
          <Container className={styles.container}>
            <p>No prescriptions found</p>
          </Container>
        )}
        {prescriptions.length && (
          <Container className={styles.container}>
            <ul className={styles.list}>
              {prescriptions?.map((prescription, index) => (
                <li key={prescription.prescriptionId}>
                  <Link
                    className={clsx(
                      styles.listItem,
                      index === prescriptions.length - 1 && styles.listItemLast,
                      index === 0 && styles.listItemFirst,
                      prescription.article.stockStatus === 'OutOfStock' &&
                        styles.listItemOutOfStock,
                    )}
                    href={`/prescriptions/${prescription.prescriptionId}`}
                    key={prescription.prescriptionId}
                  >
                    <div>
                      <h3 className={styles.listItemTitle}>
                        {prescription.article.productName}
                      </h3>
                      <p className={styles.listItemText}>
                        {prescription.article.preamble}
                      </p>
                    </div>
                    {prescription.article.stockStatus === 'OutOfStock' && (
                      <span className={styles.listItemBadge}>
                        {t('prescriptions.outOfStock')}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        )}
      </main>
    </>
  );
}
