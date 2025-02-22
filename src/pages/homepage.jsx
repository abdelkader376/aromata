import { RecoilRoot } from "recoil";
import AboutCardHome from "../components/abouthome/aboutCardHome";
import CardLinksHomeM from "../components/cardLinksHome/cardLinksHomeM";
import CardProductB from "../components/cardProduct/cardProductB";
import CardProductM from "../components/cardProduct/cardProductM";
import IamgeHome from "../components/imagehome/imagehome";
import Image2 from "../components/imagehome2/image2";
import TitleLink from "../components/titleLinks/titleLink";

export default function Homee(props){
    return(
        <div>
            <IamgeHome/>
            <TitleLink/>
            <CardLinksHomeM/>
            <AboutCardHome/>
            <CardProductM/>
            <Image2/>
            <CardProductB/>
        </div>
    )
}