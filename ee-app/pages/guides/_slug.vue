<template>
  <LazyHydrate when-visible>


    <main>
      <BackgroundEffect/>
      <Header/>
      <div class="container siteContent guides">
        <div class="breadcrumbs">
          <nuxt-link to="/">Home</nuxt-link> <em class="bc-next"></em> <nuxt-link to="/guides/">Guides</nuxt-link> <em class="bc-next"></em> <span>{{ guide.title }}</span>
        </div>
        <h1>{{ guide.title }}</h1>
        <section class="textContent guides" style="padding-bottom: 2rem;">
          <nuxt-content :document="guide"/>
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
  async asyncData({ $content, params }) {
    const guide = await $content('guides', params.slug).fetch()

    return {
      guide
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'v1',
        id: 'scollbar'
      },
      title: this.guide.title,
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
          content: this.guide.description
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://entropia.estate/guides/'+this.guide.slug+'/'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.guide.title+'| Entropia Estate'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.guide.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://entropia.estate/guides/'+this.guide.slug+'/'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.guide.title+'| Entropia Estate'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.guide.description
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