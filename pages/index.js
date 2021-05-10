import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hope 😺</title>
        <meta name="description" content="Meow, I am Hope 😺" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
      </Head>
      <div>
        <article class="baskerville  vh-100 dt w-100 bg-near-white black">
          <div class="dtc v-mid tc ph3 ph4-l">
            {/* <article class="pa3 pa5-ns">
              <Image
                src="/hope.jpg"
                alt="Picture of The Hope"
                priority={true}
                width={240}
                height={360}
                class="w-100 f5 measure"
              />
              <h1 class="f2">hope</h1>
            </article> */}
            <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
              <div class="tc">
              <Image
                src="/hope.jpg"
                alt="Picture of The Hope"
                priority={true}
                width={360}
                height={360}
                class="br-100 h4 w4 dib ba b--black-05 pa2"
              />
                <h1 class="f3 mb2">Hope. C</h1>
                <h2 class="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
              </div>
            </article>
          </div>
        </article>
      </div>
    </>
  )
}
