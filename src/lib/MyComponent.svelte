<script lang="ts">
  import { getFoo } from './utils/index.js';

  export let text = 'world!';
</script>

<div>
  Hello {text}!
</div>

{getFoo()}
