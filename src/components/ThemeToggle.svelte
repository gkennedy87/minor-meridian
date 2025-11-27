<script lang="ts">
  import { onMount } from 'svelte';
  
  let theme: 'light' | 'dark' = 'light';
  
  onMount(() => {
    // Get current theme from DOM
    theme = (document.documentElement.dataset.theme as 'light' | 'dark') || 'light';
  });
  
  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }
</script>

<button
  on:click={toggleTheme}
  aria-label="Toggle dark mode"
  title="Toggle dark mode"
  class="theme-toggle"
>
  {#if theme === 'light'}
    <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  {:else}
    <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 A7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    background: none;
    border: none;
    padding: calc(var(--grid-unit));
    cursor: pointer;
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;
  }

  .theme-toggle:hover {
    color: var(--color-accent);
  }

  .theme-toggle svg {
    width: 20px;
    height: 20px;
  }
</style>