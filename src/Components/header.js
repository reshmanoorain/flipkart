import "./header.css"
import Search from "@material-ui/icons/SearchOutlined"
import Menu from "@material-ui/icons/Menu"
import Cart from "@material-ui/icons/ShoppingCart"

function header() {
    return(
        <div className="header">
          <Menu className="menu" />
          <h2 className="text">Flipkart</h2>  
          <Cart className="cart" />
          <input className="input1" type="text" placeholder="Search for products,brands and more" />
          <Search className="search" />
          <div className="lap"></div>
          <button class="b1" type="button">Login</button>
        <span class="s1">More</span>
        <span class="s2">Cart</span>

        </div>
    )
}

export default header;