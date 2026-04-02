import { useEffect, useMemo, useState } from "react";
import productsData from "./data/products";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => {
    const unique = [...new Set(productsData.map((product) => product.category))];
    return ["All", ...unique];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const isCategoryMatch = category === "All" || product.category === category;
      const isSearchMatch = product.name.toLowerCase().includes(search.toLowerCase());
      return isCategoryMatch && isSearchMatch;
    });
  }, [products, category, search]);

  return (
    <>
      <header className="site-header">
        <nav className="navbar navbar-expand-lg bg-white py-3">
          <div className="container">
            <a className="navbar-brand brand-logo" href="#hero">
              eGOV
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ms-auto gap-lg-2">
                <li className="nav-item">
                  <a className="nav-link" href="#hero">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#latest">
                    Research
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#supporters">
                    Supporters
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <p className="hero-overline mb-2">20 years of digital transformation in</p>
                <h1 className="hero-title mb-3">
                  public service delivery <span className="hero-art">{" "}It's possible.</span>
                </h1>
                <p className="hero-text mb-4">
                  Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we're driven by the power of open digital infrastructure and ecosystems to enable governments deliver accessible, inclusive and transparent services to every citizen.
                </p>
                <div className="">
                  <a href="#" className="btn btn-primary px-4 py-2 rounded-pill">
                    Our Approach
                  </a>
                  <span >{" "}</span>
                  <a href="#" className="btn btn-primary px-4 py-2 rounded-pill">
                    Our Impact
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="">
                  {/* hero-art */}
                  <img
                    src="https://www.suposhan.in/wp-content/uploads/2024/02/adani-foundation-img1.png"
                    alt="Citizens and workers"
                    className="img-fluid hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="container">
            <h2>1,000,000,100+</h2>
            <div className="impact-meta">
              <span>citizens impacted</span>
              <span>500+ partners</span>
            </div>
          </div>
        </section>

        <section id="features" className="problem-section">
          <div className="container">
            <div className="problem-wrap">
              <div className="row g-3">
                <div className="col-lg-4">
                  <article className="problem-card  white-card h-100">
                    <p className="kicker">Big problems need</p>
                    <h3>bold approaches</h3>
                    <div className="mini-pills">
                      <span>Public Finance</span>
                      <span>Open Data</span>
                      <span>Inclusion Stack</span>
                    </div>
                  </article>
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="problem-card problem-card-one blue-card h-100">
                    {/* blue-card */}
                    <h3>210+</h3>
                    <p>projects across governments</p>
                    <a href="#" className="btn btn-primary px-4 py-2 rounded-pill">
                      Our Approach
                    </a>
                    {/* <img
                      src="https://t4.ftcdn.net/jpg/05/71/86/45/360_F_571864546_9Lbcaersk6zzcBxSHkUpPPV68FIuZokb.jpg"
                      alt="Map placeholder"
                      className="img-fluid rounded-3"
                    /> */}
                  </article>
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="problem-card problem-card-two blue-card h-100">
                    <h3>2Bn</h3>
                    <p>transactions enabled yearly</p>
                    <a href="#" className="btn btn-primary px-4 py-2 rounded-pill">
                      Our Approach
                    </a>
                    {/* <img
                      src="https://t3.ftcdn.net/jpg/15/15/85/70/360_F_1515857034_NoyJ7FZ9Qhm6w5bxZFlMaBl90iyqEbIh.jpg"
                      alt="Mobile placeholder"
                      className="img-fluid rounded-3"
                    /> */}
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sustain-section">
          <div className="container text-center">
            <p className="section-kicker mb-2">20 years of reimagining for citizens and states</p>
            <h2>sustaining change</h2>
            <p>Technology is powerful, but is only one piece of the puzzle, when it comes to enhancing the quality of life for every citizen. To have sustainable impact at scale, the collective energy of local networks to solve local problems needs to be tapped into. Our partners & networks bring this collective energy to life. The ecosystem already exists; our task is to facilitate and amplify their efforts. For 20 years, we've been turning small steps into lasting, meaningful

              change, so that no citizen is left behind.</p>
            <div className="row justify-content-center g-3 mt-2">
              <div className="col-md-5">
                <article className="quote-card h-100">
                  <img
                    src="https://www.yourtango.com/sites/default/files/image_blog/2024-09/secrets-single-people.png"
                    alt="Story one"
                    className="img-fluid rounded-3"
                  />
                  <p>"Digital systems should serve everyone."</p>
                </article>
              </div>
              <div className="col-md-5">
                <article className="quote-card h-100">
                  <img
                    src="https://www.entrepreneur.com/wp-content/uploads/sites/2/2017/07/20150820205507-single-man-outdoors-happy-bliss.jpeg"
                    alt="Story two"
                    className="img-fluid rounded-3 "
                  />
                  <p>"Open standards create lasting impact."</p>
                </article>
              </div>
            </div>
            <a href="#" className="mt-5 btn btn-primary px-4 py-2 rounded-pill">
              About Us
            </a>
          </div>
          
        </section>

        <section className="digit-section">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-5">
                <p className="section-kicker text-light mb-2">DIGIT</p>
                <h2>Our own technology-for-good platform</h2>
                <p>DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation is eGov's open-source platform with reusable building blocks and shared data registries that can be used to build solutions in multiple sectors.</p>
                <a href="#latest" className="btn btn-light rounded-pill px-4 py-2">
                  Explore the platform
                </a>
              </div>
              <div className="col-lg-7 digit-img">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/069/509/674/small/a-woman-in-glasses-is-holding-a-book-and-pointing-png.png"
                  alt="Platform showcase"
                  className="img-fluid digit-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="latest" className="latest-section">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
              <h2 className="mb-0">Latest at eGov</h2>
              <a href="#latest" className="pill-link">
                View all
              </a>
            </div>

            <div className="filter-row mb-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search by product name"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <select
                className="form-select"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <p className="result-meta">{loading ? "Loading..." : `${filteredProducts.length} results found`}</p>

            {loading && (
              <div className="loading-state text-center py-5 mt-3">
                <div className="spinner-border text-primary" role="status" aria-hidden="true"></div>
                <p className="mt-3 mb-0">Loading latest products...</p>
              </div>
            )}

            {!loading && filteredProducts.length === 0 && (
              <div className="empty-state text-center py-5 mt-3">
                <h3 className="h4">No results found</h3>
                <p className="mb-0">Try a different product name or category.</p>
              </div>
            )}

            {!loading && filteredProducts.length > 0 && (
              <div className="row g-3 mt-1">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="col-md-6 col-lg-4">
                    <article className="latest-card h-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded-3 mb-3"
                      />
                      <p className="card-tag">{product.category}</p>
                      <h3>{product.name}</h3>
                      <p className="mb-0 fw-semibold">${product.price.toFixed(2)}</p>
                    </article>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="supporters" className="supporter-section">
          <div className="container">
            <h2>Our Supporters</h2>
            <div className="supporter-logos">
              <span>CO</span>
              <span>GOVTECH</span>
              <span>TATA TRUSTS</span>
              <span>UNDP</span>
              <span>NASSCOM</span>
              <span>WORLD BANK</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <p className="brand-logo mb-2">eGOV</p>
              <p className="mb-0 footer-copy">
                Open digital ecosystems for real-world public outcomes.
              </p>
            </div>
            <div className="col-md-2">
              <h4>Useful links</h4>
              <a href="#hero">About</a>
              <a href="#features">Products</a>
              <a href="#latest">News</a>
            </div>
            <div className="col-md-2">
              <h4>Get in touch</h4>
              <a href="#hero">Media</a>
              <a href="#hero">Careers</a>
              <a href="#hero">Contact</a>
            </div>
            <div className="col-md-4">
              <h4>Subscribe Now</h4>
              <div className="subscribe-box">
                <input type="email" placeholder="Enter email address" />
                <button type="button">Go</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
