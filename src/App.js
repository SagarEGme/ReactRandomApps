import React from 'react'

import menus from './component/RecursionList/data';


import Rating from './component/StarRating/Rating';
import Randombg from './component/RandomBackground/Randombg';
import Accordian from './component/Accordian/Accordian';
import ImageSlider from './component/imageSlider/ImageSlider';
import LoadMore from './component/load-more/LoadMore';
import Treeview from './component/RecursionList/Treeview';
import QR from './component/qr-code-generator/QR';
import Lightdark from './component/Light-dark-mode/Lightdark';

const App = () => {
    return (
        // RATING
        // <Rating/>

        // <Randombg/>

        // <Accordian/>

        // <ImageSlider url={"https://picsum.photos/v2/list"} limit={'5'} page={'1'} />

        // <LoadMore/>

        // <Treeview menus={menus}/>

        // <QR />

        <Lightdark/>
    )
}

export default App
