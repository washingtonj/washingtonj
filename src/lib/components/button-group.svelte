<div class="button-group w-fit border border-black rounded-md">
  <slot></slot>
</div>

<style lang="postcss">
  .button-group > :global(button) {
    @apply uppercase text-xs font-bold p-2;
  }

  .button-group > :global(button:not(:last-child)) {
    @apply border-r border-black;
  }

  .button-group > :global(button.selected) {
    @apply bg-black text-white;
  }
</style>