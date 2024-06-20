<script>
  import { fieldtype, fieldtypes } from '../../modules/stores/index.js'
  function toggleFieldType() {
    if (!$fieldtypes.next) {
      return
    }
    fieldtype.set($fieldtypes.next())
  }
</script>

<input on:click={toggleFieldType} type="button" value={$fieldtype} />
