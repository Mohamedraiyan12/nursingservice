
export default function Productcard() {
    return(
        <>
        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src={require('../images/products/1.jpg')}
              alt='images' width={200}/>
            <div class="card-body d-flex flex-column">
            <h5 class="card-title">Product Name</h5>
              <p class="card-text">$245.67</p>
              <a href="/" id="add_btn" class="btn btn-block">Add to card</a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src={require('../images/products/2.jpg')}
             alt='images' width={200}
            />
            <div class="card-body d-flex flex-column">
            <h5 class="card-title">Product Name</h5>
              <p class="card-text">$245.67</p>
              <a href="/" id="add_btn" class="btn btn-block">Add to cart</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src={require('../images/products/3.jpg')}
             alt='images' width={200}
            />
            <div class="card-body d-flex flex-column">
            <h5 class="card-title">Product Name</h5>
              <p class="card-text">$245.67</p>
              <a href="/" id="add_btn" class="btn btn-block">Add to cart</a>
            </div>
          </div>
        </div>


        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src={require('../images/products/4.jpg')}
             alt='images' width={200}
            />
            <div class="card-body d-flex flex-column">
            <h5 class="card-title">Product Name</h5>
              <p class="card-text">$245.67</p>
              <a href="/" id="add_btn" class="btn btn-block" target = "_blank">Add to cart</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src={require('../images/products/1.jpg')}
             alt='images' width={200}
            />
            <div class="card-body d-flex flex-column">
            <h5 class="card-title">Product Name</h5>
              <p class="card-text">$245.67</p>
              <a href="/" id="add_btn" class="btn btn-block">Add to cart</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-4 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src={require('../images/products/6.jpg')}
             alt='images' width={200}
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Product Name</h5>
              <p class="card-text">$245.67</p>
              <a href="/" id="add_btn" class="btn btn-block">Add to cart</a>
            </div>
          </div>
        </div>
        </>
    )
}