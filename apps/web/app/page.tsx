import { Button, Container, HeaderLogo } from 'ui';
import { t } from 'libs';
import styles from './page.module.css';
import Link from 'next/link';

export default async function Page(): Promise<JSX.Element> {
  return (
    <>
      <HeaderLogo
        className={styles.header}
        logoClassName={styles.logo}
        title={t('global.title')}
        useH1={true}
      />
      <main className={styles.main}>
        <Container className={styles.container}>
          <h2>{t('intro.title')}</h2>
          <p>{t('intro.message')}</p>
          <Link href="/prescriptions">
            <Button className={styles.button} title={t('intro.cta')} />
          </Link>
        </Container>
      </main>
    </>
  );
}
