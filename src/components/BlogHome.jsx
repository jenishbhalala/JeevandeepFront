import React, { useEffect } from "react";
import sectionImg from "../assets/Images/section-icon.png";
import blog from "../assets/Images/blog-img.jpg";
import blog2 from "../assets/Images/blog-img2.jpg";
import blog3 from "../assets/Images/blog-img3.jpg";
import blog4 from "../assets/Images/blog-img4.jpg";
import { useTranslation } from "react-i18next";

const BlogHome = ({ Animation }) => {
    const { t } = useTranslation();
    useEffect(() => {
        window.addEventListener("scroll", Animation);
    }, [])
    return (
        <section className="blog-area reveal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="section-heading blog-heading">
                            <div className="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                            <h2 className="section__title">{t('recent_blog')}</h2>
                            <p className="section__meta">{t('news_and_update')}</p>
                        </div>
                    </div>
                </div>
                <div className="row recent-post-wrap">
                    <div className="col-lg-6">
                        <div className="recent-item">
                            <div className="recent__img"><span className="meta__date-date">09 mar, 2019</span><img
                                src={blog} alt="service-image" /></div>
                            <div className="news__content">
                                <h3 className="news__content-title"><a href="single-news">A place where start new life
                                    with peace</a></h3>
                                <ul className="news__content-list">
                                    <li className="news__content-active__dot"><a href="#">mike hardson</a></li>
                                    <li><a href="#">3 {t("comments")}</a></li>
                                </ul>
                                <p className="news__content-text">Aliq is notm hendr erit a augue insu image pellen tes
                                    que id erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    ullam blandit hendrerit faucibus suspendisse.</p><a href="single-news"
                                        className="theme-btn">{t("read_more")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="third-recent-box">
                            <ul className="third-recent-item">
                                <li>
                                    <div className="recent__img"><a href="single-news"><img src={blog2}
                                        alt="" /></a></div>
                                    <div className="recent__content"><span>07 mar, 2019</span>
                                        <h4><a href="404">Let’s together provide them a healthy food</a></h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="recent__img"><a href="single-news"><img src={blog3}
                                        alt="" /></a></div>
                                    <div className="recent__content"><span>04 mar, 2019</span>
                                        <h4><a href="single-news">Building clean water system for poor</a></h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="recent__img"><a href="single-news"><img src={blog4}
                                        alt="" /></a></div>
                                    <div className="recent__content"><span>30 feb, 2019</span>
                                        <h4><a href="404">Become a volunteer you will feel the benefits </a></h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogHome;