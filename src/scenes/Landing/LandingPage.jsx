import React from "react";
import "./LandingPage.css";
import phqLogo from "../../assets/phq-9.png";
import cardCircle from "../../assets/card-circle.png";
import eegLogo from "../../assets/eeg.png";
import detectionLogo from "../../assets/detection.png";
import patientLogo from "../../assets/patient.png";
import onemindLogo from "../../assets/logo-white.png"
import shieldIcon from "../../assets/shield.png"
import atomIcon from "../../assets/atom.png"
import btmBg from "../../assets/btm-bg.jpeg"
import patientIcon from "../../assets/patient-icon.png"
import clinicianIcon from "../../assets/clinicians.png"
import checkSquareIcon from "../../assets/check-square.png"
import feature1Img1 from "../../assets/feature-1-img-1.png"
import feature1Img2 from "../../assets/feature-1-img-2.png"
import feature1Img3 from "../../assets/feature-2-img-1.png"
import feature1Img4 from "../../assets/feature-2-img-2.png"
import feature1Img5 from "../../assets/feature-3-img-1.png"
import feature1Img6 from "../../assets/feature-3-img-2.png"
import atomBenefitsIcon from "../../assets/atom-benefits.png"
import benefitsContentIcon1 from "../../assets/benefits-icon-1.png"
import benefitsContentIcon2 from "../../assets/benefits-icon-2.png"
import benefitsContentIcon3 from "../../assets/benefits-icon-3.png"
import benefitsContentIcon4 from "../../assets/benefits-icon-4.png"
import benefitsContentIcon5 from "../../assets/benefits-icon-5.png"
import benefitsContentIcon6 from "../../assets/benefits-icon-6.png"
import footerBg from "../../assets/footer-bg.png"
import footerLogo from "../../assets/footer-logo.png"
import footerVector from "../../assets/footer-vector.png"
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const scrollToSection = (className) => {
        const targetSection = document.querySelector(`.${className}`);
    
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <main className="main-content">
                <div className="hero-section">
                    <div className="bg-circular-lines">
                        {[...Array(24)].map((_, index) => (
                        <div key={index} className="circle"></div>
                        ))
                        }
                    </div>

                    <div className="hero-container">
                        <div className="content-grid">
                            <div className="title-wrapper">
                                <p className="title-text"> Healthy Minds, Happy Lives 
                                <br /> with </p>
                                <p className="subtitle-text"> OneMind </p>
                            </div>
                            <p className="small-text">Revolutionising Wellbeing with EEG Technology</p>
                        </div>

                        <div className="actions">
                            <div className="button">
                                <button className="get-started-button" onClick={() => navigate('/login')}>Let's Get Started</button>
                            </div>
                        </div>

                        <div className="card-wrapper-1">
                            <div className="card-item-1">
                                <div className="logo-wrapper-1">
                                    <div className="logo-1">
                                        <img className="phqlogo" src={phqLogo} alt="PHQ Logo"/>
                                    </div>
                                </div>

                                <div className="content-wrapper-1">
                                    <div className="wrapper-1">
                                        <p className="wrapper-text-1">Online PHQ-9 Test</p>
                                    </div>
                                </div>
                            </div>
                            <img className="card-circle-1" src={cardCircle} alt="Card Circle"/> 
                        </div>

                        <div className="card-wrapper-2">
                            <div className="card-item-2">
                                <div className="logo-wrapper-2">
                                    <div className="logo-2">
                                        <img className="eeglogo" src={eegLogo} alt="EEG Logo"/>
                                    </div>
                                </div>

                                <div className="content-wrapper-2">
                                    <div className="wrapper-2">
                                        <p className="wrapper-text-2">EEG Signal Processing</p>
                                    </div>
                                </div>
                            </div>
                            <img className="card-circle-2" src={cardCircle} alt="Card Circle"/> 
                        </div>

                        <div className="card-wrapper-3">
                            <img className="card-circle-3" src={cardCircle} alt="Card Circle"/> 
                            <div className="card-item-3">
                                <div className="logo-wrapper-3">
                                    <div className="logo-3">
                                        <img className="detectionlogo" src={detectionLogo} alt="Detection Logo"/>
                                    </div>
                                </div>

                                <div className="content-wrapper-3">
                                    <div className="wrapper-3">
                                        <p className="wrapper-text-3">Depression Detection</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper-4">
                            <img className="card-circle-4" src={cardCircle} alt="Card Circle"/> 
                            <div className="card-item-4">
                                <div className="logo-wrapper-4">
                                    <div className="logo-4">
                                        <img className="patientlogo" src={patientLogo} alt="Patient Logo"/>
                                    </div>
                                </div>

                                <div className="content-wrapper-4">
                                    <div className="wrapper-4">
                                        <p className="wrapper-text-4">Effective Patient Management</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navigation">
                    <div className="nav-container">
                        <div className="four-navigation">
                            <div className="left-column">
                                <div className="nav-links-left">
                                    <div className="nav-link-news">
                                        <button className="news-button" onClick={() => scrollToSection('services')}>Users</button>
                                    </div>

                                    <div className="nav-link-services">
                                        <button className="services-button" onClick={() => scrollToSection('our-services')}>Services</button>
                                    </div>
                                </div>
                            </div>

                            <div className="middle">
                                    <img className="middle-logo" src={onemindLogo} alt="One Mind Logo"/> 
                            </div> 

                            <div className="right-column">
                                <div className="nav-links-right">
                                    <div className="nav-link-features">
                                        <button className="features-button" onClick={() => scrollToSection('features')}>Features</button>
                                    </div>

                                    <div className="nav-link-benefits">
                                        <button className="benefits-button" onClick={() => scrollToSection('benefits')}>Benefits</button>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="actions-nav">
                            <div className="button-nav">
                                <button className="sign-in-button" onClick={() => navigate('/login')}>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="section">
                <div className="help">
                    <div className="help-container-1">
                        <div className="help-header">
                            <div className="help-tag">
                                <p className="our-services"> Our Services </p>
                            </div>

                            <p className="heading"> How We Can Help </p>
                        </div>
                    </div>

                    <div className="help-container-2">
                        <div className="help-content">
                            <div className="help-section-1">
                                <div className="help-row-1">
                                    <div className="help-top-row">
                                        <div className="detection">
                                            <div className="icon-detection">
                                                <img className="shield-logo" src={shieldIcon} alt="Shield Icon"/>
                                            </div>

                                            <p className="detection-title"> Detection </p>
                                        </div>
                                    </div>

                                    <div className="classification">
                                        <div className="mental-illness">
                                            <p className="emotional"> Emotional </p>
                                            <img className="atom-1" src={atomIcon} alt="Atom Icon"/>
                                            <p className="depression"> Depression </p>
                                            <img className="atom-2" src={atomIcon} alt="Atom Icon"/>
                                            <p className="mindfullness"> Mindfullness </p>
                                            <img className="atom-3" src={atomIcon} alt="Atom Icon"/>
                                            <p className="wellness"> Wellness </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="help-row-2">
                                    <div className="help-middle-row">
                                        <img className="middle-left-logo" src={onemindLogo} alt="One Mind Logo"/>
                                        <p className="wellbeing"> Wellbeing </p>
                                        <img className="middle-right-logo" src={onemindLogo} alt="One Mind Logo"/>
                                    </div>
                                </div>

                                <div className="help-row-3">
                                    <div className="help-bottom-row">
                                        <img className="bottom-bg" src={btmBg} alt="Bottom Background"/>
                                        <div className="bottom-vector"></div>
                                        <p className="deep-learning"> Deep Learning </p>
                                    </div>
                                </div>
                            </div>

                            <div className="help-section-2">
                                <p className="section-2-title"> We create better wellbeing <br/> experience through DL <br/> technology. </p>
                                <p className="section-2-subtitle"> We leverage deep learning to create an <br/> accessible wellbeing experience for <br/> everyone on planet earth. </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="services">
                    <div className="services-container">
                        <div className="services-content">
                            <div className="services-main">
                                <div className="services-heading-row">
                                    <p className="heading"> Who We Serve </p>
                                </div>

                                <div className="services-content-row">
                                    <div className="services-groups">
                                        <div className="services-entities">
                                            <div className="services-entities-content">
                                                <div className="services-entities-icon">
                                                    <img className="services-entities-icon-img" src={patientIcon} alt="Patient Icon"/>
                                                </div>

                                                <div className="services-entities-des">
                                                    <p className="entities-heading"> Patients </p>
                                                    <p className="entities-des"> OneMind prioritise patients' wellbeing by <br/> providing rapid mental status results, <br/> ensuring swift access to treatment from <br/> clinicians. </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="services-entities">
                                            <div className="services-entities-content">
                                                <div className="services-entities-icon">
                                                    <img className="services-entities-icon-img" src={clinicianIcon} alt="Clinicisn Icon"/>
                                                </div>

                                                <div className="services-entities-des">
                                                    <p className="entities-heading"> Clinicians </p>
                                                    <p className="entities-des"> At OneMind, we offer certified clinicians <br/> with seamless platform for uploading <br/> patient’s EEG data to detect and address <br/> depression. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features">
                    <div className="features-container">
                        <div className="features-content">
                            <div className="features-heading">
                                <p className="heading"> Our Core Features </p>
                            </div>

                            <div className="features-main">
                                <div className="features-row">
                                    <div className="features-row-1-img">
                                        <img className="features-1-img-1" src={feature1Img1} alt="Features 1-1"/>
                                        <img className="features-1-img-2" src={feature1Img2} alt="Features 1-2"/>
                                    </div>

                                    <div className="features-frame">
                                        <div className="features-tag">
                                            <p className="feature-heading"> Feature 1 </p>
                                        </div>

                                        <div className="features-row-content">
                                            <div className="features-header-des">
                                                <p className="features-header"> Depression Detection </p>
                                                <p className="features-des"> We utilise advanced EEG signal processing <br/> and deep learning techniques to detect <br/> depression, offering a more efficient and <br/> precise diagnostic approach </p>
                                            </div>

                                            <div className="features-1-checklist">
                                                <div className="checklist">
                                                    <img className="check-square-icon" src={checkSquareIcon} alt="Check Square Icon"/>
                                                    <p className="checklist-des"> Patient Empowerment </p>
                                                </div>

                                                <div className="checklist">
                                                    <img className="check-square-icon" src={checkSquareIcon} alt="Check Square Icon"/>
                                                    <p className="checklist-des"> Improved Mental Health Care </p>
                                                </div>

                                                <div className="checklist">
                                                    <img className="check-square-icon" src={checkSquareIcon} alt="Check Square Icon"/>
                                                    <p className="checklist-des"> Early Detection </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="features-row">
                                    <div className="features-frame">
                                        <div className="features-tag">
                                            <p className="feature-heading"> Feature 2 </p>
                                        </div>

                                        <div className="features-row-content">
                                            <div className="features-header-des">
                                                <p className="features-header"> Online PHQ-9 Test </p>
                                                <p className="features-des"> Incorporating PHQ-9 test, OneMind <br/> enhances diagnostic accuracy for <br/> clinicians by providing valuable insights <br/> into a patient's mental health status, <br/> complementing our deep learning <br/> model's results. </p>
                                            </div>
                                        </div>

                                        <div className="features-tagline">
                                            <div className="features-tagline-content">
                                                <p className="features-tagline-heading"> Prove valid and reliable </p>
                                                <p className="features-tagline-text"> Screening tool for depression </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="features-row-2-img">
                                        <img className="features-2-img-1" src={feature1Img3} alt="Features 2-1"/>
                                        <img className="features-2-img-2" src={feature1Img4} alt="Features 2-2"/>
                                    </div>
                                </div>

                                <div className="features-row">
                                    <div className="features-row-3-img">
                                        <img className="features-3-img-1" src={feature1Img5} alt="Features 3-1"/>
                                        <img className="features-3-img-2" src={feature1Img6} alt="Features 3-2"/>
                                    </div>

                                    <div className="features-frame">
                                        <div className="features-tag">
                                            <p className="feature-heading"> Feature 3 </p>
                                        </div>

                                        <div className="features-row-content">
                                            <div className="features-header-des">
                                                <p className="features-header"> Patient Management </p>
                                                <p className="features-des"> Our platform provides clinicians with <br/> seamless access to both PHQ-9 test and <br/> EEG signal results, facilitating efficient, <br/> personalised care for patients. </p>
                                            </div>
                                        </div>

                                        <div className="features-tagline">
                                            <div className="features-tagline-content">
                                                <p className="features-tagline-heading"> Enhance </p>
                                                <p className="features-tagline-text"> Clinical Efficiency </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="benefits">
                    <div className="benefits-container">
                        <div className="benefits-content">
                            <div className="benefits-heading-row">
                                <div className="benefits-heading-frame">
                                    <div className="benefits-main-label">
                                        <img className="benefits-atom" src={atomBenefitsIcon} alt="Atoms"/>
                                        <p className="benefits-subheading"> Our Commitment </p>
                                    </div>

                                    <p className="benefits-heading-text"> Why Choose OneMind? </p>
                                </div>
                            
                                <div className="benefits-heading-tag">
                                    <p className="benefits-6"> 6 Benefits </p>
                                </div>
                            </div>

                            <div className="benefits-content-row">
                                <div className="benfits-content-row-frame">
                                    <div className="benefits-frame">
                                        <div className="benefits-frame-content">
                                            <div className="benefits-content-icon-frame">
                                                <img className="benefits-content-icon" src={benefitsContentIcon1} alt="Icon1"/>
                                            </div>

                                            <div className="benefits-content-heading-subheading">
                                                <div className="benefits-content-heading-subheading-frame">
                                                    <p className="benefits-content-heading"> Enhanced Diagnostic </p>
                                                    <p className="benefits-content-subheading"> OneMind provides clinicians with a <br/> more comprehensive diagnostic <br/> picture by incorporating EEG signal <br/> analysis alongside the PHQ-9 test. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="benefits-frame">
                                        <div className="benefits-frame-content">
                                            <div className="benefits-content-icon-frame">
                                                <img className="benefits-content-icon" src={benefitsContentIcon2} alt="Icon2"/>
                                            </div>

                                            <div className="benefits-content-heading-subheading">
                                                <div className="benefits-content-heading-subheading-frame">
                                                    <p className="benefits-content-heading"> Improved Patient Confidence </p>
                                                    <p className="benefits-content-subheading"> With OneMind, clinicians have a useful <br/> supplementary tool that helps them to <br/> enhance and validate their diagnosis <br/> based on EEG data. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="benefits-frame">
                                        <div className="benefits-frame-content">
                                            <div className="benefits-content-icon-frame">
                                                <img className="benefits-content-icon" src={benefitsContentIcon3} alt="Icon3"/>
                                            </div>

                                            <div className="benefits-content-heading-subheading">
                                                <div className="benefits-content-heading-subheading-frame">
                                                    <p className="benefits-content-heading"> Improved Patient Experience </p>
                                                    <p className="benefits-content-subheading"> OneMind streamlines and humanises <br/> evaluations, building confidence and <br/> collaboration between professionals <br/> and patients. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="benfits-content-row-frame">
                                    <div className="benefits-frame">
                                        <div className="benefits-frame-content">
                                            <div className="benefits-content-icon-frame">
                                                <img className="benefits-content-icon" src={benefitsContentIcon4} alt="Icon4"/>
                                            </div>

                                            <div className="benefits-content-heading-subheading">
                                                <div className="benefits-content-heading-subheading-frame">
                                                    <p className="benefits-content-heading"> Streamlined Clinical Workflow </p>
                                                    <p className="benefits-content-subheading"> OneMind simplifies the diagnostic <br/> process, allowing clinicians to access <br/> patient data efficiently. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="benefits-frame">
                                        <div className="benefits-frame-content">
                                            <div className="benefits-content-icon-frame">
                                                <img className="benefits-content-icon" src={benefitsContentIcon5} alt="Icon5"/>
                                            </div>

                                            <div className="benefits-content-heading-subheading">
                                                <div className="benefits-content-heading-subheading-frame">
                                                    <p className="benefits-content-heading"> Personalised Care </p>
                                                    <p className="benefits-content-subheading"> PHQ-9 and EEG signal analysis allow <br/> clinicians to customise treatment <br/> approaches for each patient. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="benefits-frame">
                                        <div className="benefits-frame-content">
                                            <div className="benefits-content-icon-frame">
                                                <img className="benefits-content-icon" src={benefitsContentIcon6} alt="Icon6"/>
                                            </div>

                                            <div className="benefits-content-heading-subheading">
                                                <div className="benefits-content-heading-subheading-frame">
                                                    <p className="benefits-content-heading"> Cost-Efficient </p>
                                                    <p className="benefits-content-subheading"> OneMind's requirement of  17 <br/> electrodes  minimises  costs for <br/> clinicians during EEG data collection. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="footer-frame">
                        <img className="footer-bg" src={footerBg} alt="Footer Background"/>
                        <div className="footer-content">
                            <div className="footer-logo-heading">
                                <div className="footer-logo-frame">
                                    <img className="footer-logo" src={footerLogo} alt="Footer Logo"/>
                                </div>

                                <p className="footer-heading"> Revolutionizing Wellbeing Through The Power Of <br/> EEG Technology And Deep Learning. </p>
                            </div>

                            <div className="footer-link">
                                <button className="footer-homepage" onClick={() => scrollToSection('landing-page')}> Homepage </button>
                                <button className="footer-services" onClick={() => scrollToSection('our-services')}> Services </button>
                                <button className="footer-features" onClick={() => scrollToSection('features')}> Features </button>
                                <button className="footer-benefits" onClick={() => scrollToSection('benefits')}> Benefits </button>
                            </div>

                            <div className="copyright-legal">
                                <p className="footer-copyright-text"> Copyright© 2024 OneMind. inc </p>
                                <img className="footer-vector" src={footerVector} alt="Footer Vector"/>
                                <p className="footer-copyright-text"> Privacy Policy </p>
                                <img className="footer-vector" src={footerVector} alt="Footer Vector"/>
                                <p className="footer-copyright-text"> Terms & Conditions </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div> 
    );
};

export default LandingPage;