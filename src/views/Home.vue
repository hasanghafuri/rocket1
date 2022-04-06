<template>
  <div>
    <PromotionBanner />
    <App-header />
    <HeroSection />
    <AppCourses :cards="cards" />
    <AppLearning :cards="maxcards" />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import HeroSection from "@/components/HeroSection.vue";
import PromotionBanner from "@/components/PromotionBanner.vue";
import AppCourses from "@/components/AppCourses.vue";
import AppLearning from "@/components/AppLearning";

export default {
  name: "App",
  components: {
    AppHeader,
    HeroSection,
    PromotionBanner,
    AppCourses,
    AppLearning,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          image:
            "https://static.roocket.ir/images/cover/2022/2/6/3PlQ3mofymYiMeBCoEhFioIYRAlLA8oZxjwrNDrX.png",
          maintitle: " تکمیل ضبط",
          maintitle2: " آشنایی بالاراول 9",
          maintitle3: `
                صفحه ساز المنتور است. در این دوره آموزشی قرار است که به صورت کامل کار با صفحه ساز المنتور را یاد گرفته و در خلال پروژه ‌هایی بصورت عملی از آن استفاده...`,
          maxtitle: "۳۹",
          maxtitle2: " رایگان ):",
          footer: "مشاهده اطلاعات دوره",
          color: "text-blue-500",
        },
        {
          id: 2,
          image:
            "https://static.roocket.ir/images/cover/2022/2/6/eAJubdTlHdkyNIMjWauJpw8lE3YhWwuixXdTbBHW.png",
          maintitle: " به زودی",
          maintitle2: "آموزش زبان Dart",
          maintitle3: `
                زبان دارت (یا dart) به عنوان زبان اصلی یادگیری فلاتر به شمار می رود که توسط گوگل ارائه شده است، و این شرکت برای ساخت برنامه های چند سکویی (یا Cross-Pl...`,
          maxtitle: "۳۹",
          maxtitle2: " رایگان ):",
          footer: "مشاهده اطلاعات دوره",
          color: "text-blue-500",
        },
        {
          id: 3,
          image:
            "https://static.roocket.ir/images/cover/2022/1/31/kbKmnVsX4F3aWKqcVJt2SOSJGZKJ60wTZpd1yyjA.jpg",
          maintitle: " درحال برگزاری",
          maintitle2: " آموزش پیشرفته پایتون",
          maintitle3: ` 
                هر زبان برنامه نویسی در کنار ویژگی‌هایی که به صورت مقدماتی و ابتدایی در اختیار توسعه دهندگان‌ش قرار می‌دهد یکسری ویژگی حرفه‌ای و پیشرفته نیز دارد که ت...`,
          maxtitle: "۳۹",
          maxtitle2: " ۳۵۰,۰۰۰تومان",
          footer: "مشاهده اطلاعات دوره",
          color: "text-blue-500",
        },
        {
          id: 4,
          image:
            "https://static.roocket.ir/images/cover/2021/12/27/8BfFnAGijjinppH1xm9vdWbLa1FEHVbZWglxSP4I.jpg",
          maintitle: " تکمیل ضبط",
          maintitle2: "آموزش المنتور",
          maintitle3: `
                صفحه ساز المنتور است. در این دوره آموزشی قرار است که به صورت کامل کار با صفحه ساز المنتور را یاد گرفته و در خلال پروژه ‌هایی بصورت عملی از آن استفاده...`,
          maxtitle: "۳۹",
          maxtitle2: " ۲۵۰,۰۰۰تومان",
          footer: "مشاهده اطلاعات دوره",
          color: " text-red-500 ",
        },
      ],
      maxcards: [
        {
          id: 1,
          title1: "JS",
          course: "شامل ۷دوره",
          subject: "جاوااسکریپت",
          mainsubject: `جاوا اسکریپت از مهمترین ابزارهای توسعه وب به شمار می‌رود که در فرایند
          توسعه سمت کاربر و سرور مورد استفاده قرار می‌گیرد....`,
          footer: "مشاهده اطلاعات مسیریادگیری ",
          bg: "bg-yellow-300",
        },
        {
          id: 2,
          title1: "Web",
          colortext: " bg-green-500",
          bgtext: " ",
          course: "شامل ۹دوره",
          subject: "طراحی وب",
          mainsubject: `آموزش طراحی وب یکی از مسائل پر مخاطب روزهای ایران و جهان است که در طی دوره گام یادگیری طراحی وب سعی کرده‌ایم قدم به قدم...`,
          footer: "مشاهده اطلاعات مسیریادگیری ",
          bg: "bg-green-500",
        },
        {
          id: 3,
          title1: "لاراول",
          colortext: "",
          course: "شامل ۹دوره",
          subject: "لاراول",
          mainsubject: `لاراول پر استفاده‌ترین فریمورک زبان برنامه نویسی PHP بوده و در سال‌های اخیر توسط شرکت‌ها و استارتاپ‌های بسیار زیادی مورد...`,
          footer: "مشاهده اطلاعات مسیریادگیری ",
          bg: "bg-red-500",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
