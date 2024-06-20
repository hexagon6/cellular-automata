<script>
  import { onMount, createEventDispatcher } from 'svelte'
  import { writable } from 'svelte/store'
  import { mapIterator, timer } from '../../modules/index.js'
  import { interval, timerHandle } from '../../modules/stores/index.js'
  import { stopped } from '../../modules/utils/timer.js'

  const dispatch = createEventDispatcher()

  const intervals = mapIterator([
    {
      _id: 0,
      ms: 1000,
      name: 'slow',
    },
    {
      _id: 1,
      ms: 500,
      name: 'normal',
    },
    {
      _id: 2,
      ms: 250,
      name: 'fast',
    },
    {
      _id: 3,
      ms: 100,
      name: 'superfast',
    },
  ])

  onMount(() => {
    return toggleInterval()
  })

  function toggleInterval(previousHandle) {
    if (previousHandle) {
      clearInterval(previousHandle)
    }
    interval.set(intervals.next())
    timerHandle.set(
      setInterval(
        timer,
        $interval.ms,
        {
          store: writable({ stopped }),
          fire: dispatch,
        },
        'stopped',
        'next'
      )
    )

    return () => clearInterval($timerHandle)
  }
</script>

<input
  on:click={() => toggleInterval($timerHandle)}
  type="button"
  value={`${$interval && $interval.name}`}
/>
