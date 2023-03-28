<template>
  <LazyHydrate when-visible>

    <main>
      <BackgroundEffect/>
      <Header/>
      <div class="container siteContent">
        <div class="breadcrumbs">
          <a href="/">Home</a> <em class="bc-next"></em> <span>Disclaimer</span>
        </div>
        <h1>Entropia Estate Disclaimer</h1>
        <section class="textContent">
          <p>We are doing our best to prepare the content of this site. However, EntropiaMarket cannot warranty the
            expressions and suggestions of the contents, as well as its accuracy. In addition, to the extent
            permitted by the law, EntropiaMarket shall not be responsible for any losses and/or damages due to the
            usage of the information on our website.</p>

          <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

          <p>The links contained on our website may lead to external sites, which are provided for convenience only.
            Any information or statements that appeared in these sites are not sponsored, endorsed, or otherwise
            approved by EntropiaMarket. For these external sites, EntropiaMarket cannot be held liable for the
            availability of, or the content located on or through it. Plus, any losses or damages occurred from
            using these contents or the internet generally.</p>
          <p>We are not associated with Entropia Estate Society in Entropia Universe.</p>
        </section>
      </div>
      <Footer/>
    </main>

  </LazyHydrate>
</template>

<script>
import Header from "~/components/header";
import Footer from "~/components/footer";
import BackgroundEffect from "~/components/background-effect";
import LazyHydrate from 'vue-lazy-hydration';
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'v1',
        id: 'scollbar'
      },
      title: 'Disclaimer',
      link: [
        {
          rel: 'canonical',
          href: 'https://entropia.estate' + this.$route.fullPath
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Market data from auction about Player housing in Entropia Universe. And your first stop for virtual visits of Entropia estates.'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://entropia.estate' + this.$route.fullPath
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://entropia.estate' + this.$route.fullPath
        }
      ],
      style: [
      ],
      script: [
      ]
    }
  },
  modules: [],
  components: {LazyHydrate, Footer, Header, BackgroundEffect}
}
</script>