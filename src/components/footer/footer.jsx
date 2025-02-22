import './footer.css'
export default function Footer(){
    return(
        <div className="footer">
                
                    <div className="row m-auto container text-center">
                        <div className="col-lg-3 col-md-3 col-sm-3 col"><i class="fa-brands fa-facebook"></i></div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col"><i class="fa-brands fa-instagram"></i></div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col"><i class="fa-brands fa-linkedin"></i></div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col"><i class="fa-brands fa-tiktok"></i></div>
                    </div>




                    <div className="row m-auto  text-center">
                    <div className="col-lg-4 col-md-3 col-sm-3 col">
                        <p>©Aromata</p>
                        <p>Refund and return policy</p>
                    </div>
                        <div className="col-lg-4 col-md-3 col-sm-3 col">
                            <p><i class="fa-solid fa-headphones"></i></p>
                            <p>info@Aromatafoods.com</p>
                            <p>971508151578</p>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-3 col">
                        <p><i class="fa-sharp fa-solid fa-location-dot"></i></p>
                        <p>3-80, AL dyaar bulding, AL Wasl, Business bay, Dubai, UAE</p>
                        </div>
                    </div>
        </div>
    )
}