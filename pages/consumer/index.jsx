import Footer from '@components/footer/footer.component';
import Header from '@components/header/header.component';

export default function Consumer() {
  return (
    <div className='container'>
      <Header />
      <main className='mainContent'></main>
      <Footer />
    </div>
  );
}
