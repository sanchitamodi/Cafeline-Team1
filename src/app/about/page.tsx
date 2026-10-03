export default function AboutPage() {
  return (
    <main className="about-page">
      <h1>About Us</h1>

      <section>
        <h2>Our Mission</h2>
        <p>
          At Cafeline, we strive to provide a relaxing, stress-free space where people can connect with cats while
          helping every rescued cat find their perfect forever home. Our open café gives each cat a safe environment
          where they are loved, nurtured, and socialized, bringing comfort to both our cats and guests.
        </p>
      </section>

      <section>
        <h2>Visiting Information</h2>
        <p>
          Reserve or just walk in for a visit to enjoy a drink, snack, and plenty of time with our friendly cats. Your
          visit helps support their care while you relax, play, and get to know them.
        </p>
      </section>

      <section>
        <h2>Adoption Information</h2>
        <p>
          Found your perfect match? Speak with our team, complete a short adoption application, and we’ll take care of
          the rest !
        </p>

        <h3>How Adoption Works</h3>
        <p>Please note: same-day adoptions are not available.</p>
        <p>1. Meet the cats — Visit our café and find one you connect with.</p>
        <p>2. Submit an application — Complete an application after your visit.</p>
        <p>3. Wait for approval — The rescue reviews applications within 48 hours.</p>
        <p>4. Schedule your appointment — We’ll contact you once approved.</p>
        <p>5. Bring your cat home — Complete the adoption at your appointment.</p>

        <p>Adoption fees are $125 for one cat or $175 for a pair.</p>
      </section>

      <section className="menu-section">
        <h1>Cafeline Menu</h1>

        <div className="menu-list">
          <div className="menu-column">
            <h2>COFFEE</h2>

            <div className="menu-item menu-header-row">
              <span className="menu-name-spacer"></span>
              <span className="menu-dots-hidden"></span>
              <span className="header-box-12">12 oz</span>
              <span className="menu-price-dots-hidden"></span>
              <span className="header-box-16">16 oz</span>
            </div>

            <div className="menu-item">
              <span className="menu-name">Latte</span>
              <span className="menu-dots"></span>
              <span className="price-box-12">$4.50</span>
              <span className="menu-price-dots"></span>
              <span className="price-box-16">$4.75</span>
            </div>
            <p className="menu-description">Served hot or iced</p>

            <div className="menu-item">
              <span className="menu-name">Mocha</span>
              <span className="menu-dots"></span>
              <span className="price-box-12">$5.00</span>
              <span className="menu-price-dots"></span>
              <span className="price-box-16">$5.75</span>
            </div>
            <p className="menu-description"></p>

            <div className="menu-item">
              <span className="menu-name">Macchiato</span>
              <span className="menu-dots"></span>
              <span className="price-box-12">$4.50</span>
              <span className="menu-price-dots"></span>
              <span className="price-box-16">$5.25</span>
            </div>
            <p className="menu-description">Served hot or iced</p>

            <div className="menu-item">
              <span className="menu-name">Cappuccino</span>
              <span className="menu-dots"></span>
              <span className="price-box-12">$4.50</span>
              <span className="menu-price-dots"></span>
              <span className="price-box-16">$4.75</span>
            </div>
            <p className="menu-description">Espresso, milk, and vanilla foam</p>

            <div className="menu-item">
              <span className="menu-name">Americano</span>
              <span className="menu-dots"></span>
              <span className="price-box-12">$3.50</span>
              <span className="menu-price-dots"></span>
              <span className="price-box-16">$4.00</span>
            </div>
            <p className="menu-description"></p>

            <div className="menu-item">
              <span className="menu-name">Drip Coffee</span>
              <span className="menu-dots"></span>
              <span className="price-box-12">$3.00</span>
              <span className="menu-price-dots"></span>
              <span className="price-box-16">$3.50</span>
            </div>
            <p className="menu-description">House brew</p>

            <div className="menu-item">
              <span className="menu-name">Cold Brew</span>
              <span className="menu-dots"></span>
              <span className="price-box-12">$4.25</span>
              <span className="menu-price-dots"></span>
              <span className="price-box-16">$4.75</span>
            </div>

            <h2>NON-COFFEE</h2>

            <div className="menu-item menu-header-row">
              <span className="menu-name-spacer"></span>
              <span className="menu-dots-hidden"></span>
              <span className="header-box-12">12 oz</span>
              <span className="menu-price-dots-hidden"></span>
              <span className="header-box-16">16 oz</span>
            </div>

            <div className="menu-item">
              <span className="menu-name">Matcha Latte</span>
              <span className="menu-dots"></span>
              <span className="price-box-12">$6.00</span>
              <span className="menu-price-dots"></span>
              <span className="price-box-16">$6.75</span>
            </div>
            <p className="menu-description">Served hot or iced.</p>

            <div className="menu-item">
              <span className="menu-name">Chai Latte</span>
              <span className="menu-dots"></span>
              <span className="price-box-12">$5.50</span>
              <span className="menu-price-dots"></span>
              <span className="price-box-16">$6.25</span>
            </div>
            <p className="menu-description">Spiced chai latte.</p>

            <div className="menu-item">
              <span className="menu-name">Milk Tea w/ Boba</span>
              <span className="menu-dots"></span>
              <span className="price-box-12">$5.75</span>
              <span className="menu-price-dots"></span>
              <span className="price-box-16">$6.50</span>
            </div>
            <p className="menu-description">Flavors: classic milk tea, brown sugar, thai, matcha, hojicha, oolong</p>

            <div className="menu-item">
              <span className="menu-name">Fruit Tea w/ Boba</span>
              <span className="menu-dots"></span>
              <span className="price-box-12">$5.75</span>
              <span className="menu-price-dots"></span>
              <span className="price-box-16">$6.50</span>
            </div>
            <p className="menu-description">Flavors: mango, passion fruit, yuzu, peach, strawberry.</p>
            <p className="menu-description">Green or black tea.</p>
          </div>

          <div className="menu-column">
            <h2>TREATS</h2>
            <div className="menu-item">
              <span className="menu-name">Raspberry Oat Bar</span>
              <span className="menu-dots"></span>
              <span className="menu-price">$4.25</span>
            </div>
            <p className="menu-description"></p>

            <div className="menu-item">
              <span className="menu-name">Apple Danish</span>
              <span className="menu-dots"></span>
              <span className="menu-price">$6.25</span>
            </div>
            <p className="menu-description"></p>

            <div className="menu-item">
              <span className="menu-name">Earl Grey Scone</span>
              <span className="menu-dots"></span>
              <span className="menu-price">$5.00</span>
            </div>
            <p className="menu-description">Earl Grey with hints of vanilla.</p>

            <div className="menu-item">
              <span className="menu-name">Almond Croissant</span>
              <span className="menu-dots"></span>
              <span className="menu-price">$6.00</span>
            </div>
            <p className="menu-description">Flakey and airy with crusted almonds.</p>

            <div className="menu-item">
              <span className="menu-name">Chocolate Croissant</span>
              <span className="menu-dots"></span>
              <span className="menu-price">$5.50</span>
            </div>
            <p className="menu-description">Flaky and airy with crusted almonds.</p>

            <div className="menu-item">
              <span className="menu-name">Dark Chocolate Banana Loaf</span>
              <span className="menu-dots"></span>
              <span className="menu-price">$5.00</span>
            </div>
            <p className="menu-description"></p>

            <div className="menu-item">
              <span className="menu-name">Chive & Cheddar Scone (GF)</span>
              <span className="menu-dots"></span>
              <span className="menu-price">$6.75</span>
            </div>
            <p className="menu-description"></p>

            <h2>ADD-INS</h2>
            <div className="menu-item">
              <span className="menu-name">Extra Espresso Shot</span>
              <span className="menu-dots"></span>
              <span className="menu-price">$1.25</span>
            </div>
            <p className="menu-description"></p>

            <div className="menu-item">
              <span className="menu-name">Cold Foam</span>
              <span className="menu-dots"></span>
              <span className="menu-price">$0.75</span>
            </div>
            <p className="menu-description">No non-dairy option.</p>

            <div className="menu-item">
              <span className="menu-name">Milk Alternative</span>
              <span className="menu-dots"></span>
              <span className="menu-price">$0.75</span>
            </div>
            <p className="menu-description">Oat milk, almond milk, or soy milk.</p>

            <div className="menu-item">
              <span className="menu-name">Syrups</span>
              <span className="menu-dots"></span>
              <span className="menu-price">$0.50</span>
            </div>
            <p className="menu-description">
              Vanilla bean, lavender, caramel, hazelnut, brown sugar, and sugar-free options upon request.
            </p>
            <div className="menu-item">
              <span className="menu-name">Extra Toppings</span>
              <span className="menu-dots"></span>
              <span className="menu-price">$0.50</span>
            </div>
            <p className="menu-description">Boba or lychee/mango jelly.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
