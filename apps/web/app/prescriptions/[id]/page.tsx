import { Container, HeaderLogo, IconBack } from 'ui';
import { PrescriptionsDTO } from 'types';
import styles from '../../page.module.css';
import Link from 'next/link';
import { t } from 'libs';
import clsx from 'clsx';

export async function generateStaticParams() {
  const prescriptions = (await fetch(
    'http://localhost:3100/api/v1/prescriptions',
  ).then((res) => res.json())) as PrescriptionsDTO[];
  return prescriptions
    .filter((prescription) => prescription.prescriptionId)
    .map((prescription) => ({
      id: prescription.prescriptionId?.toString(),
      article: prescription.article,
    }));
}

const getPrescription = async (id: string) => {
  const response = await fetch(
    `http://localhost:3100/api/v1/prescriptions/${id}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

export default async function Page({ params }): Promise<JSX.Element> {
  const prescription = (await getPrescription(params.id)) as PrescriptionsDTO;
  return (
    <>
      <Link href="/">
        <HeaderLogo
          className={styles.header}
          logoClassName={styles.logo}
          title={t('global.title')}
        />
      </Link>
      <Container className={styles.container}>
        <Link href="/prescriptions/" className={styles.back}>
          <IconBack />
          {t('global.back')}
        </Link>
      </Container>
      <main className={styles.main}>
        <Container className={styles.container}>
          <h2 className={styles.pageTitle}>
            {t('prescription.title')} #{prescription.prescriptionId}
          </h2>
          <div className={styles.card}>
            <h3 className={styles.prescriptionProductTitle}>
              {prescription.article.productLongName}
            </h3>
            {prescription.article.description && (
              <p>{prescription.article.description}</p>
            )}
            {prescription.article.preamble && (
              <p>{prescription.article.preamble}</p>
            )}
            {prescription.article.stockStatus === 'OutOfStock' && (
              <span
                className={clsx(
                  styles.productBadge,
                  styles.productBadgeWarning,
                )}
              >
                {t('prescription.outOfStock')}
              </span>
            )}
            {prescription.article.stockStatus === 'InStock' && (
              <span
                className={clsx(
                  styles.productBadge,
                  styles.productBadgeSuccess,
                )}
              >
                {t('prescription.inStock')}
              </span>
            )}
            <h3 className={styles.subtitle}>
              {t('prescription.prescribedBy')}
            </h3>
            <div className={styles.prescribedBy}>
              {prescription.prescriber.name && (
                <>
                  <span>{prescription.prescriber.name}</span>
                  <br />
                </>
              )}
              {prescription.prescriber.profession && (
                <>
                  <span>{prescription.prescriber.profession}</span>
                  <br />
                </>
              )}
              {prescription.prescriber.phoneNumber && (
                <>
                  <a
                    className={styles.link}
                    href={`tel:${prescription.prescriber.phoneNumber}`}
                  >
                    {prescription.prescriber.phoneNumber}
                  </a>
                  <br />
                </>
              )}
              {prescription.prescriber.workplace && (
                <>
                  <span>{prescription.prescriber.workplace}</span>
                </>
              )}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
