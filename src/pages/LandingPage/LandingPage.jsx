import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import Header from "../../components/Header/";
import FAQ from "../../components/FAQ";
import Layout from "../../layout/Layout";
import Hero from "../../components/Hero";

const LandingPage = () => {
  return (
    <div className=" bg-slate-50">
      <Layout>
        <Header />
        <Hero />
        <Feature />
        <FAQ />
      </Layout>
      <Footer />
    </div>
  );
};

export default LandingPage;
