
import React from "react";
import './ShopProduct.css'
import one from "../images/one.JPG"
export default function ShopProduct(props) {

    return (

        <>
            <div class="container">
                <ul class="breadcrumb-v5">
                    <li>
                        <a href="http://localhost:3000/">בית</a>
                    </li>
                    <li></li>

                </ul>
            </div>
            {/* <div class="shop-product">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 md-margin-bottom-50">
                            <div class="ms-container">
                                <img class="img-size" src={one} alt=" עדי ויוסי" ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div id="container">

                {/* <!-- Start	Product details --> */}
                <div class="product-details">

                    {/* <!-- 	Product Name --> */}
                    <h1>Biru Putaran</h1>
                    {/* <!-- 		<span class="hint new">New</span> --> */}
                    {/* <!-- 		<span class="hint free-shipping">Free Shipping</span> --> */}
                    {/* <!-- 		the Product rating --> */}
                    <span class="hint-star star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </span>


                    {/* <!-- The most important information about the product --> */}
                    <p class="information">" Especially good for container gardening, the Angelonia will keep blooming all summer even if old flowers are removed. Once tall enough to cut, bring them inside and you'll notice a light scent that some say is reminiscent of apples. "</p>



                    {/* <!-- 		Control --> */}
                    <div class="control">

                        {/* <!-- Start Button buying --> */}
                        <button class="btn">
                            {/* <!-- 		the Price --> */}
                            <span class="price">49 $</span>
                            {/* <!-- 		shopping cart icon--> */}
                            <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            {/* <!-- 		Buy Now / ADD to Cart--> */}
                            <span class="buy">Buy Now</span>
                        </button>
                        {/* <!-- End Button buying --> */}

                    </div>

                </div>

                {/* <!-- 	End	Product details   --> */}



                {/* <!-- 	Start product image & Information --> */}

                <div class="product-image">

                    <img src={one} alt="Omar Dsoky"></img>

                    {/* <!--product Information--> */}
                    <div class="info">
                        <h2>The Description</h2>
                        <ul>
                            <li><strong>Sun Needs: </strong>Full Sun</li>
                            <li><strong>Soil Needs: </strong>Damp</li>
                            <li><strong>Zones: </strong>9 - 11</li>
                            <li><strong>Height: </strong>2 - 3 feet</li>
                            <li><strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall</li>
                            <li><strong>Features: </strong>Tolerates heat</li>
                        </ul>
                    </div>
                </div>
                {/* <!--  End product image  --> */}


            </div>




        </>
    )
}