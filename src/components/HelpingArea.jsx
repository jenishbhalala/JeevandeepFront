import React, { useEffect, useState } from "react";

import sectionImg from "../assets/Images/section-icon.png";
import helpingImg from "../assets/Images/helping-img.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const HelpingArea = ({ Animation }) => {
    const { t } = useTranslation();

    useEffect(() => {
        window.addEventListener("scroll", Animation);
    }, [])

    return (
        <div className="reveal">
            <section className="mixer-area helping-area reveal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading mixer-heading">
                                <div className="section-icon">
                                    <img src={sectionImg} alt="section-icon" />
                                </div>
                                <h2 className="section__title">{t('helping_hand')}</h2>
                            </div>
                            <div className="helping-item">
                                <div className="row">
                                    <div className="col">
                                        <div className="helping-box helping-box1">
                                            <i className="fa fa-hamburger"></i>
                                            <h4>{t('food')}</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="helping-box helping-box2">
                                            <i className="fa fa-wine-bottle"></i>
                                            <h4>{t('water')}</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="helping-box helping-box3">
                                            <i className="fa fa-heart-circle-plus"></i>
                                            <h4>{t('medical')}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="helping-text-box">
                                <p className="helping__text">
                                    Aliq is notm hendr erit a augue insu image pellen tes que
                                    id erat quis simply free text sollicitud. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing ullam blandit hendrerit faucibus suspendisse.
                                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incidi labore et dolore magna aliqua enim ad minim veniam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mixer-area2 helping-area2 reveal">
                <div className="container">
                    <div className="row fun-content-wrap">
                        <div className="col-lg-6">
                            <div className="fun-content">
                                <div className="fun-item fun-item1">
                                    <img src={helpingImg} alt="" />
                                </div>
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <img src={sectionImg} alt="section-icon" />
                                    </div>
                                    <h2 className="section__title">{t('charity_activities')}</h2>
                                    <p className="section__desc">
                                        Aliq is notm hendr erit a augue insu image pellen tes que id erat
                                        quis simply free text sollicitud. Lorem ipsum dolor
                                        sit not amet, consectetur adipiscing ullam
                                        blandit simply free text hendrerit faucibus suspendisse.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="helping-form">
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <img src={sectionImg} alt="section-icon" />
                                    </div>
                                    <h2 className="section__title text__white">{t('make_donation')}</h2>
                                    <p className="section__meta text__white">{t('donate_us_now')}</p>
                                </div>
                                <div className="form-shared">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                        placeholder={t("custom_value")} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder={t("full_name")} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control"
                                                        placeholder={t("email_add")} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder={t("location")} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea className="textarea" name="message"
                                                        placeholder={t('leave_comment')}></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="theme-btn submit__btn">{t('continue_now')}</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HelpingArea;