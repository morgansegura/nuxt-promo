<template>
  <div>
    <section class="container">
      <h1 class="fs-xxl">h1. Heading 1</h1>
      <h2 class="fs-xl">h2. Heading 2</h2>
      <h3 class="fs-lg">h3. Heading 3</h3>
      <h4 class="fs-md">h4. Heading 4</h4>
      <h5>h5. Heading 5</h5>
      <h6>h6. Heading 6</h6>
      <p>p. Paragraph</p>
      <div>
        <i>i. Italic tag</i>
      </div>
      <div>
        <b>b. Bold tag</b>
      </div>
      <div>
        <em>em. Emphasis tag</em>
      </div>
      <div>
        <a>a. Hyperlink</a>
      </div>
      <div>
        <strong>strong. Strong tag</strong>
      </div>

      <span>span. Span tag is an inline element by default</span>

      <prism language="js">
        const testScript = () => {
        this.works = true;
        }
      </prism>
    </section>
  </div>
</template>

<script>
import SiteLogo from "~/components/Logo";

export default {
  head: {
    title: "Online Courses and Blogs | Filip Jerga"
  },
  data: () => ({}),
  components: {},
  computed: {}
};
</script>
