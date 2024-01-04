import About from "../components/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Company() {
  return (
    <>
      <Header />
      <About />
      <main className="company">
        <section className="about-company">
          <ContentGroup title={"sobre imadet"} />
        </section>
        <section className="slide"></section>
      </main>
      <Footer />
    </>
  );
}

function ContentGroup({ title }) {
  return (
    <div className="content-group">
      <h2 className="heading-2 mb-md">{title}</h2>
      <div className="content">
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lectus
          quam, dictum non ultricies vel, condimentum sed turpis. Nullam
          scelerisque tortor sed lacinia ullamcorper. Maecenas non sodales elit.
          Proin sagittis ullamcorper enim, ut blandit ex. Phasellus sodales sit
          amet erat ac dapibus. In enim ligula, eleifend sit amet lorem id,
          rhoncus elementum nulla. In hac habitasse platea dictumst. Maecenas
          vestibulum massa dui, eu luctus est fermentum ut. Praesent laoreet
          elit vel interdum sollicitudin. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque accumsan neque ac mi ornare
          euismod. Integer pulvinar eu velit vitae vehicula. Duis a magna
          ornare, viverra turpis eget, accumsan risus. Ut eu augue facilisis,
          finibus metus ac, ornare neque. Etiam et risus eget risus vulputate
          commodo sit amet eget elit. Suspendisse congue pulvinar ante, non
          consectetur elit fringilla et. Morbi accumsan metus nec turpis viverra
          lacinia. Nullam suscipit dui feugiat, mollis ex vitae, lobortis mi.
          Morbi quis vestibulum nisi, quis ornare tortor. Cras turpis augue,
          fringilla ut lobortis rutrum, suscipit quis purus. Nulla facilisis
          nibh a pretium egestas. In scelerisque efficitur urna, sit amet
          bibendum ipsum pretium et. Sed et purus ut libero pharetra blandit sit
          amet ut quam. Phasellus semper metus ipsum, eu vehicula ante fringilla
          ac. Morbi turpis ante, egestas ut vestibulum ac, faucibus at dolor.
          Sed molestie dolor id sapien facilisis efficitur et sed lacus. In
          semper metus vulputate ornare ultrices.{" "}
        </p>
      </div>
    </div>
  );
}

export default Company;
