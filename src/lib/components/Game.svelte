<script>
  import { onMount } from 'svelte'
  import { get } from 'svelte/store'
  import {
    fieldGen,
    initializer,
    randomInitializer,
    naive,
    listToDict,
    dictToList,
  } from '../../lib/modules/index.js'
  import Field from '../../lib/components/Field.svelte'
  import ControlPanel from '../../lib/components/ControlPanel.svelte'
  import {
    algorithm,
    x,
    y,
    field,
    fieldtype,
    fieldtypes,
    statecolors,
    stati,
    name,
  } from '../../lib/modules/stores/index.js'

  export let defaults = {}

  function next() {
    console.log('next fired...')
    if ($algorithm && $algorithm.run && $algorithm.run[$fieldtype]) {
      field.set(
        dictToList($algorithm.run[$fieldtype]($x, $y)(listToDict($field)))
      )
    }
  }

  function init(x, y) {
    console.log('iniiit')
    const { length: states } = $statecolors
    const _x = get(x)
    const _y = get(y)
    const newField = fieldGen($fieldtype)(_x, _y, states, randomInitializer)
    console.log({ newField, $fieldtype, _x, _y, states, randomInitializer })
    field.set(newField)
  }

  onMount(() => {
    statecolors.set(defaults.statecolors)
    algorithm.set(defaults.algorithm)
    console.log($algorithm)
    fieldtypes.set(defaults.fieldtypes())
    fieldtype.set($fieldtypes.next())
    field.set([])
    stati.set(defaults.stati)
    name.set(defaults.name)
  })
</script>

<svelte:head>
  <title>{defaults?.name}</title>
</svelte:head>

<ControlPanel on:next={next} on:init={() => init(x, y)}>
  <Field />
</ControlPanel>
