import React, { useState } from 'react'
import { useRouter } from 'next/router';
import HomeBanner from '@/components/HomeBanner';
import Journey from '@/components/Journey';
import Services from '@/components/Services';
import Career from '@/components/Career';
import Contact from '@/components/Contact'


// const Fullpage = () => (
//     <ReactFullpage
//         navigation={true}
//         licenseKey={'GNU GENERAL PUBLIC LICENSE'}
//         scrollingSpeed={2000}
//         scrollHorizontally={true}
//         scrollHorizontallyKey={'GNU GENERAL PUBLIC LICENSE'}

//         render={({ }) => {
//             return (
//                 <ReactFullpage.Wrapper>
//                     <div className="section">
//                         <HomeBanner />
//                     </div>
//                     <div className="section">
//                         <Journey />
//                     </div>
//                     <div className="section">
//                         <Services />
//                     </div>
//                     <div className="section">
//                         <Career />
//                     </div>
//                     <div className="section">
//                         <Contact />
//                     </div>
//                 </ReactFullpage.Wrapper>
//             );
//         }}
//     />
// );

// export default Fullpage


// function applyScrollify() {
//     $.scrollify({
//         section: ".scroll",
//         sectionName: "section-name",
//         interstitialSection: "",
//         easing: "easeOutExpo",
//         scrollSpeed: 500,
//         offset: 0,
//         scrollbars: false,
//         standardScrollElements: "",
//         setHeights: true,
//         overflowScroll: true,
//         updateHash: false,
//         touchScroll: true,
//         before: function (i, scroll) {

//             var ref = scroll[i].attr("data-section-name");

//             $(".pagination .active").removeClass("active");

//             $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
//         },
//         afterRender: function () {
//             var pagination = "<ul class=\"pagination\">";
//             var activeClass = "";
//             $(".scroll").each(function (i) {
//                 activeClass = "";
//                 if (i === $.scrollify.currentIndex()) {
//                     activeClass = "active";
//                 }
//                 pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"></a></li>";
//             });

//             pagination += "</ul>";

//             $(".scroll-banner").append(pagination);

//             $(".pagination a").on("click", $.scrollify.move);
//         }
//     });
// }

// function screenCheckScrollify() {
//     if (window.screen.width >= 1100) {
//         applyScrollify();
//     } else {
//         console.info('Your Device is not compatable for Scrollify for better user experience check large devices')
//     }
// }
// screenCheckScrollify();

// const [isActive, setIsActive] = useState(false);

// const handleMenu = () => {
//     setIsActive((prev) => !prev);
// }

// const router = useRouter();

// export default FullPageScroll