/*
 * Castledown Web Fonts from colophon-foundry.org
 *
 * The fonts included in this stylesheet are subject to the End User License purchased
 * from Colophon Foundry. The fonts are protected under domestic and international trademark and
 * copyright law. You are prohibited from modifying, reverse engineering, duplicating, or
 * distributing this font software.
 *
 * (c) 2019 Colophon Foundry
 *
 * Licenced to Hack the North, Techyon
 */
export { default as FontCastledownEOT } from "./fonts/castledown-heavy.eot";
export { default as FontCastledownTTF } from "./fonts/castledown-heavy.ttf";
export { default as FontCastledownWOFF } from "./fonts/castledown-heavy.woff";
export { default as FontCastledownWOFF2 } from "./fonts/castledown-heavy.woff2";
export { default as FontInterBoldWOFF } from "./fonts/Inter-Bold.woff";
export { default as FontInterBoldWOFF2 } from "./fonts/Inter-Bold.woff2";
export { default as FontInterMediumWOFF } from "./fonts/Inter-Medium.woff";
export { default as FontInterMediumWOFF2 } from "./fonts/Inter-Medium.woff2";
export { default as FontInterRegularWOFF } from "./fonts/Inter-Regular.woff";
export { default as FontInterRegularWOFF2 } from "./fonts/Inter-Regular.woff2";

/**
 * Export all images as modules so that webpack can deal with them appropriately
 * and in one file so that we have a centralized reference to all the images.
 * This means we only have to change one path and not all files that are using
 * that image if we change the src of the image.
 */
/* Logos */
export { default as LogoDarkIcon } from "./img/logos/primary-dark.svg";
export { default as LogoLightIcon } from "./img/logos/primary-light.svg";
export { default as LogoAltDarkIcon } from "./img/logos/alternative-dark.svg";
export { default as LogoAltLightIcon } from "./img/logos/alternative-light.svg";
export { default as LogoIconDarkIcon } from "./img/logos/icon-dark.svg"; // just the gear
export { default as LogoIconLightIcon } from "./img/logos/icon-light.svg"; // just the gear

export { default as MLHLogoHeroImg } from "./img/mlh-hero.png";

/* Social icons */
export { default as SocialFacebookGradientIcon } from "./img/icons/socials/fb-gradient.svg";
export { default as SocialInstaGradientIcon } from "./img/icons/socials/instagram-gradient.svg";
export { default as SocialLinkedinGradientIcon } from "./img/icons/socials/linkedin-gradient.svg";
export { default as SocialTwitterGradientIcon } from "./img/icons/socials/twitter-gradient.svg";

/* Functional icons */
export { default as SolidChevronIcon } from "./img/icons/solid-chevron.svg";
export { default as ChevronIcon } from "./img/icons/chevron.svg";
export { default as HamburgerIcon } from "./img/icons/hamburger.svg";
export { default as ArrowIcon } from "./img/icons/arrow.svg";
export { default as ArrowWhiteIcon } from "./img/icons/arrow-white.svg";
export { default as SolidArrowIcon } from "./img/icons/solid-arrow.svg";
export { default as CheckmarkWhiteIcon } from "./img/icons/checkmark-white.svg";
export { default as CloseButtonIcon } from "./img/icons/close-icon.svg";

/* Animations */
export { default as FaqChatboxLottieJson } from "./img/animations/faqChatbox.json";
export { default as GearPlatformJson } from "./img/animations/gearPlatform.json";
export { default as HLandingPageJson } from "./img/animations/hLandingPage.json";
export { default as HtnIllu1Json } from "./img/animations/htnIllu1.json";
export { default as LandingPagePeachPlatformJson } from "./img/animations/landingPagePeachPlatform.json";
export { default as NLandingPageJson } from "./img/animations/nLandingPage.json";
export { default as TLandingPageJson } from "./img/animations/tLandingPage.json";
export { default as HelicopterSponsorLottieJson } from "./img/animations/helicopterSponsor.json";
export { default as GearQuoteLottieJson } from "./img/animations/gearQuote.json";
export { default as PlantLottieJson } from "./img/animations/plantAnimation.json";
export { default as SlideshowAnimationJson } from "./img/animations/slideshowAnimation.json";
export { default as AboutBubblesTopJson } from "./img/animations/aboutBubblesTop.json";
export { default as AboutBubblesBottomJson } from "./img/animations/aboutBubblesBottom.json";
export { default as PageLoadingThreeDotsJson } from "./img/animations/loading.json";

/* Decorative icons */
export { default as AboutImg } from "./img/still/about.png";
export { default as BubblesImg } from "./img/still/bubbles.png";
export { default as RightCloudImg } from "./img/still/rightCloud.png";
export { default as LeftCloudImg } from "./img/still/leftCloud.png";
export { default as CoralGearImg } from "./img/still/CoralGear.png";
export { default as MustardGearImg } from "./img/still/MustardGear.png";
export { default as TealGearImg } from "./img/still/TealGear.png";
export { default as WaterlooEngineeringImg } from "./img/still/waterlooEngineering.png";
export { default as CircleBlueIcon } from "./img/icons/circle-blue.svg";
export { default as CircleGradientIcon } from "./img/icons/circle-gradient.svg";
export { default as PlayButtonIcon } from "./img/icons/play-button.svg";
export { default as ArtboardImg } from "./img/still/platform.png";
export { default as FourOFourAImg } from "./img/still/404a.png";
export { default as FourOFourBImg } from "./img/still/404b.png";
export { default as FourOFourCImg } from "./img/still/404c.png";
export { default as MobileFourOFourImg } from "./img/still/MobileFourOFour.png";
export { default as SomethingWentWrongImg } from "./img/still/SomethingWentWrong.png";

/* Organizer images */
export { default as AdvaitMaybhateImg } from "./img/organizers/AdvaitMaybhate.png";
export { default as KevinPeiImg } from "./img/organizers/KevinPei.png";
export { default as SamuelYangImg } from "./img/organizers/SamuelYang.png";
export { default as SimranThindImg } from "./img/organizers/SimranThind.png";
export { default as SophieQinImg } from "./img/organizers/SophieQin.png";
export { default as AnnieXuImg } from "./img/organizers/AnnieXu.png";
export { default as AshleyYangImg } from "./img/organizers/AshleyYang.png";
export { default as CarolChuImg } from "./img/organizers/CarolChu.png";
export { default as JessieZhouImg } from "./img/organizers/JessieZhou.png";
export { default as KarenLeeImg } from "./img/organizers/KarenLee.png";
export { default as IsabelLimImg } from "./img/organizers/IsabelLim.png";
export { default as SabrinaCaoImg } from "./img/organizers/SabrinaCao.png";
export { default as AlanMaImg } from "./img/organizers/AlanMa.png";
export { default as CarolineChenImg } from "./img/organizers/CarolineChen.png";
export { default as JuliaDuImg } from "./img/organizers/JuliaDu.png";
export { default as MarcelONeilImg } from "./img/organizers/MarcelONeil.png";
export { default as NatashaChenImg } from "./img/organizers/NatashaChen.png";
export { default as SabaYasrebiImg } from "./img/organizers/SabaYasrebi.png";
export { default as AlexXieImg } from "./img/organizers/AlexXie.png";
export { default as AlexisTaoImg } from "./img/organizers/AlexisTao.png";
export { default as JenniferWuImg } from "./img/organizers/JenniferWu.png";
export { default as MichelleTeplitskiImg } from "./img/organizers/MichelleTeplitski.png";
export { default as StevenXuImg } from "./img/organizers/StevenXu.png";
export { default as EmilyWangImg } from "./img/organizers/EmilyWang.png";
export { default as PatrickLiuImg } from "./img/organizers/PatrickLiu.png";
export { default as TimZhangImg } from "./img/organizers/TimZhang.png";
export { default as AlexCuociImg } from "./img/organizers/AlexCuoci.png";
export { default as DianaChangImg } from "./img/organizers/DianaChang.png";
export { default as AllenLuImg } from "./img/organizers/AllenLu.png";
export { default as AnnaLiangImg } from "./img/organizers/AnnaLiang.png";
export { default as AnnaVerkhovskayaImg } from "./img/organizers/AnnaVerkhovskaya.png";
export { default as DexterVanLeeuwenImg } from "./img/organizers/DexterVanLeeuwen.png";
export { default as EthanGuoImg } from "./img/organizers/EthanGuo.png";
export { default as JessicaZhangImg } from "./img/organizers/JessicaZhang.png";
export { default as MeganMahImg } from "./img/organizers/MeganMah.png";
export { default as MoeAmadouImg } from "./img/organizers/MoeAmadou.png";
export { default as PatrickZhangImg } from "./img/organizers/PatrickZhang.png";
export { default as RahmaGillanImg } from "./img/organizers/RahmaGillan.png";
export { default as AntonChowImg } from "./img/organizers/AntonChow.png";
export { default as KristineClarinImg } from "./img/organizers/KristineClarin.png";
export { default as WinnyYangImg } from "./img/organizers/WinnyYang.png";


/* Sponsor assets (logos, branding, etc) */
export { default as HootsuiteLogoImg } from "./img/sponsors/hootsuite.png";
export { default as WaterlooEngLogoImg } from "./img/sponsors/waterloo-eng.png";
export { default as WaterlooMathLogoImg } from "./img/sponsors/uwmath.png";
export { default as IBMLogoImg } from "./img/sponsors/ibm.png";
export { default as ArctypeLogoImg } from "./img/sponsors/arctype.png";
export { default as FILogoImg } from "./img/sponsors/founderinstitute.png";
export { default as EcopiaLogoImg } from "./img/sponsors/ecopia.svg";
export { default as MicrosoftPastLogoImg } from "./img/sponsors/microsoft.svg";
export { default as OTPPLogoImg } from "./img/sponsors/otpp.svg";
export { default as CitadelLogoImg } from "./img/sponsors/citadel.png";
export { default as TDLogoImg } from "./img/sponsors/td.svg";
export { default as TechyonLogoImg } from "./img/sponsors/techyon.png";
export { default as MLHLogoImg } from "./img/sponsors/mlh-partner.svg";
export { default as CSELogoImg } from "./img/sponsors/cse.png";
export { default as AccentureLogoImg } from "./img/sponsors/accenture.png";
export { default as RBCLogoImg } from "./img/sponsors/rbc.svg";
export { default as LoyaltyOneLogoImg } from "./img/sponsors/loyaltyone.svg";
export { default as LoblawLogoImg } from "./img/sponsors/loblaw.svg";
export { default as IMCTradingLogoImg } from "./img/sponsors/IMCTradingBronze.png";
export { default as RogersLogoImg } from "./img/sponsors/rogers.svg";
export { default as SurveyMonkeyLogoImg } from "./img/sponsors/surveymonkey.svg";
export { default as FlexportLogoImg } from "./img/sponsors/flexport.png";
export { default as CANSOFCOMLogoImg } from "./img/sponsors/CANSOFCOM.png";
export { default as DRWLogoImg } from "./img/sponsors/drw.png";
export { default as XELogoImg } from "./img/sponsors/xe.svg";
export { default as ShopifyLogoImg } from "./img/sponsors/shopify.svg";
export { default as TextNowLogoImg } from "./img/sponsors/textnow.svg";
export { default as CourseraLogoImg } from "./img/sponsors/coursera.svg";
export { default as UbisoftLogoImg } from "./img/sponsors/UbisoftLogo.svg";
export { default as AThinkingApeLogoImg } from "./img/sponsors/AThinkingApeLogo.svg";
export { default as ManulifeLogoImg } from "./img/sponsors/Manulife_rgb.svg";
export { default as KikLogoImg } from "./img/sponsors/kik.svg";
export { default as VeevaLogoImg } from "./img/sponsors/VeevaLogo.png";
export { default as DeloitteLogoImg } from "./img/sponsors/DeloitteLogo.png";
export { default as SunlifeLogoImg } from "./img/sponsors/sunlife.png";
export { default as FreshbooksLogoImg } from "./img/sponsors/freshbooks.svg";
export { default as BlockmasonLogoImg } from "./img/sponsors/BlockmasonLogo.svg";
export { default as GeneralDynamicsLogoImg } from "./img/sponsors/generaldynamics.png";
export { default as PandGLogoImg } from "./img/sponsors/p&g.png";
export { default as UwaterlooLogoImg } from "./img/sponsors/uwaterloo.svg";
export { default as FacebookLogoImg } from "./img/sponsors/facebook_logo.svg";
export { default as SapLogoImg } from "./img/sponsors/SAP logo.svg";
export { default as AlgorandLogoImg } from "./img/sponsors/Algorand_logo.svg";
export { default as ApplyboardLogoImg } from "./img/sponsors/ApplyBoardLogo.svg";
export { default as CockroachLabsLogoImg } from "./img/sponsors/CockroachLabsLogo.svg";
export { default as GoogleLogoImg } from "./img/sponsors/google.svg";
export { default as ACVAuctionsLogoImg } from "./img/sponsors/acv_logo.svg";
export { default as LinodeLogoImg } from "./img/sponsors/Linode.png";
export { default as WaterfrontLogoImg } from "./img/sponsors/Waterfront.png";
export { default as VoiceflowLogoImg } from "./img/sponsors/voiceflow.png";
export { default as BoltLogoImg } from "./img/sponsors/bolt.svg";
export { default as BMOLogoImg } from "./img/sponsors/bmo.svg";
export { default as BloombergLogoImg } from "./img/sponsors/bloomberg.svg";
export { default as UWFacofSciLogoImg } from "./img/sponsors/UWaterlooScienceFaculty.png";
export { default as IndexExchangeLogoImg } from "./img/sponsors/IndexExchangeLogo.svg";
export { default as FirebaseLogoImg } from "./img/sponsors/firebase.png";
export { default as KPMGLogoImg } from "./img/sponsors/kpmg.png";
export { default as DropbaseLogoImg } from "./img/sponsors/dropbase.png";
export { default as ACVLogoImg } from "./img/sponsors/acvlogo.png";
export { default as CashAppLogoImg } from "./img/sponsors/cash_app.png";
export { default as NEXTLogoImg } from "./img/sponsors/next36.png";
export { default as ContraryLogoImg } from "./img/sponsors/contrary.svg";
export { default as MicrosoftCurrLogoImg } from "./img/sponsors/microsoft.png";
export { default as FacebookNewLogoImg } from "./img/sponsors/facebook.png";
export { default as VonageLogoImg } from "./img/sponsors/vonage.png";
export { default as PGLogoImg } from "./img/sponsors/pg.png";
export { default as PinnacleLogoImg } from "./img/sponsors/pinnacle.png";
export { default as UWLogoImg } from "./img/sponsors/uwaterloo.64ed02de.svg";
export { default as FounderInstituteLogoImg } from "./img/sponsors/founderinstitute.png";
export { default as SunLifeLogoImg } from "./img/sponsors/sunlife.png";

/* Leaders section headshots */
export { default as CatNooneHeadshotImg } from "./img/leaders/cat_noone.jpeg";
export { default as ChamathPalihapitiyaHeadshotImg } from "./img/leaders/chamath_palihapitiya.jpg";
export { default as DanielleStrachmanHeadshotImg } from "./img/leaders/danielle_strachman.jpg";
export { default as DhananjaJayalathHeadshotImg } from "./img/leaders/dhananja_jayalath.jpeg";
export { default as DiogoBiazusHeadshotImg } from "./img/leaders/diogo_biazus.jpg";
export { default as JackDorseyHeadshotImg } from "./img/leaders/jackdorsey.jpg";
export { default as JenDewaltHeadshotImg } from "./img/leaders/jen_dewalt.jpg";
export { default as LukeChesserHeadshotImg } from "./img/leaders/luke_chesser.jpg";
export { default as RyanGracianoHeadshotImg } from "./img/leaders/ryan_graciano.jpg";
export { default as VinodKhoslaHeadshotImg } from "./img/leaders/vinod_khosla.jpeg";

/* Keynote Speakers assets */
export { default as ChamathPalihapitiyaKeynoteImg } from "./img/keynote-speakers/chamath_palihapitiya_keynote.png";
export { default as VinodKhoslaKeynoteImg } from "./img/keynote-speakers/vinod_khosla_keynote.png";

/* Judges section headshots */
export { default as AlexMaccawHeadshotImg } from "./img/judges/alex_maccaw.jpg";
export { default as AlexisSmirnovHeadshotImg } from "./img/judges/alexis_smirnov.png";
export { default as AliPartoviHeadshotImg } from "./img/judges/ali_partovi.jpg";
export { default as AndrewMiklasHeadshotImg } from "./img/judges/andrew_miklas.png";
export { default as AnnMakosinskiHeadshotImg } from "./img/judges/ann_makosinski.png";
export { default as BogdanKnezevicHeadshotImg } from "./img/judges/bogdan_knezevic.png";
export { default as ChrisBestHeadshotImg } from "./img/judges/chris_best.jpg";
export { default as ChrisBrysonHeadshotImg } from "./img/judges/chris_bryson.jpg";
export { default as DarynaKulyaHeadshotImg } from "./img/judges/daryna_kulya.jpeg";
export { default as DeonNicholasHeadshotImg } from "./img/judges/deon_nicholas.png";
export { default as EllenChisaHeadshotImg } from "./img/judges/ellen_chisa.jpg";
export { default as EricDiepHeadshotImg } from "./img/judges/eric_diep.jpg";
export { default as EricMigicovskyHeadshotImg } from "./img/judges/eric_migicovsky.png";
export { default as EvanStitesClaytonHeadshotImg } from "./img/judges/evan_stites_clayton.jpg";
export { default as GregoryKobergerHeadshotImg } from "./img/judges/gregory_koberger.jpg";
export { default as HenryShiHeadshotImg } from "./img/judges/henry_shi.jpg";
export { default as HongweiLiuHeadshotImg } from "./img/judges/hongwei_liu.jpg";
export { default as JoostOuwerkerkHeadshotImg } from "./img/judges/joost_ouwerkerk.jpg";
export { default as LeoPolovetsHeadshotImg } from "./img/judges/leo_polovets.jpg";
export { default as LiamHorneHeadshotImg } from "./img/judges/liam_horne.jpeg";
export { default as LindenTibbetsHeadshotImg } from "./img/judges/linden_tibbets.png";
export { default as LPMauriceHeadshotImg } from "./img/judges/lp_maurice.jpg";
export { default as LubaYudasinaHeadshotImg } from "./img/judges/luba_yudasina.png";
export { default as LukeIsemanHeadshotImg } from "./img/judges/luke_iseman.png";
export { default as MichaelGibsonHeadshotImg } from "./img/judges/michael_gibson.jpg";
export { default as MohitCheppudiraHeadshotImg } from "./img/judges/mohit_cheppudira.png";
export { default as NicolasZuluagaHeadshotImg } from "./img/judges/nicolas_zuluaga.png";
export { default as NimaVaziriHeadshotImg } from "./img/judges/nima_vaziri.png";
export { default as PatrickHanniganHeadshotImg } from "./img/judges/patrick_hannigan.png";
export { default as QasarYounisHeadshotImg } from "./img/judges/qasar_younis.png";
export { default as SeanYoungHeadshotImg } from "./img/judges/sean_young.jpg";
export { default as ShirleyMiaoHeadshotImg } from "./img/judges/shirley_miao.jpg";
export { default as SteveMccartneyHeadshotImg } from "./img/judges/steve_mccartney.jpg";
export { default as TannerPhilpHeadshotImg } from "./img/judges/tanner_philip.png";
export { default as TiffaniAshleyBellHeadshotImg } from "./img/judges/tiffani_ashley_bell.png";
export { default as TylerCampaigneHeadshotImg } from "./img/judges/tyler_campaigne.png";
export { default as ValentinTsatskinHeadshotImg } from "./img/judges/valentin_tsatskin.png";
export { default as VishalMathurHeadshotImg } from "./img/judges/vishal_mathur.png";
export { default as YitongZhangHeadshotImg } from "./img/judges/yitong_zhang.png";
export { default as JonathanNorrisHeadshotImg } from "./img/judges/jonathan_norris.png";
export { default as SunilSharmaHeadshotImg } from "./img/judges/sunil_sharma.png";
export { default as AdamWoottonHeadshotImg } from "./img/judges/adam_wootton.jpg";
export { default as JacobWillemsmaHeadshotImg } from "./img/judges/jacob_willemsma.png";
export { default as JordanJociusHeadshotImg } from "./img/judges/jordan_jocius.jpeg";
export { default as PhilRivardHeadshotImg } from "./img/judges/phil_rivard.png";
export { default as VictorVucicevichHeadshotImg } from "./img/judges/victor_vucicevich.png";
export { default as JakeCooperHeadshotImg } from "./img/judges/jake_cooper.jpg";

/* Slideshow Photos */
export { default as LaptopsFrontImg } from "./img/slideshow/globalCommunity/laptops-front.jpg";
export { default as LaptopsLeftImg } from "./img/slideshow/globalCommunity/laptops-left.jpg";
export { default as LaptopsRightImg } from "./img/slideshow/globalCommunity/laptops-right.jpg";
export { default as CouchesImg } from "./img/slideshow/industryLeaders/couches.jpg";
export { default as MicrophoneImg } from "./img/slideshow/industryLeaders/microphone.jpg";
export { default as WaterBottlesImg } from "./img/slideshow/industryLeaders/water-bottles.jpg";
export { default as HardwareImg } from "./img/slideshow/resourcesAndMentorship/hardware.jpg";
export { default as MentorshipImg } from "./img/slideshow/resourcesAndMentorship/mentorship.jpg";
export { default as PresentationImg } from "./img/slideshow/resourcesAndMentorship/presentation.jpg";
export { default as CupsImg } from "./img/slideshow/uniqueExperiences/cups.jpg";
export { default as HelicopterImg } from "./img/slideshow/uniqueExperiences/helicopter.jpg";
export { default as YouBelongImg } from "./img/slideshow/uniqueExperiences/you-belong.jpg";
