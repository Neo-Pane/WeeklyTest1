function Footer(){
    return(
        <div style= {{marginLeft : "1px",backgroundColor : "black",margin : "15px", padding  : "30px",borderRadius : "5px",width  :"750px",height  :"250px"}}>
            <div style = {{marginLeft : "-45px",color : "white",display  :"flex",justifyContent  :"space-around",flexDirection : "row"}}>
                <h4>About flex Bussiness Pro</h4>
                <h4>Recent Photos</h4>
                <h4>Galleries</h4>
            </div>
            <div style = {{display  :"flex",justifyContent : "space-evenly",flexDirection : "row",alignItems  :"center",marginLeft : "-30px",color : "white", width  :"750px",height : "200px"}}>
                <p>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit<br /> Reprehenderit earum nesciunt <br />esse, maxime iusto laboriosam<br /> distinctio nisi quis ipsam amet,<br /> praesentium voluptatum et ex <br />cum ipsa suscipit debitis <br />exercitationem magnam!</p>
                <p>Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit.<br /><br /> Ratione tempore saepe quam corporis<br /> ex consequatur repellat provident<br /><br /> deleniti, iure voluptates expedita<br /> perferendis a, atque nemo.</p>
                <img  src = "https://st.depositphotos.com/1006318/3685/i/950/depositphotos_36850117-stock-photo-collage-of-business-people-group.jpg" width = "180px" height ="180px"/>
            </div>
        </div>
    )
}
export default Footer;