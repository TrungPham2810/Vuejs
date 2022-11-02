<template>
    <div class="col-sm-6 offset-sm-3 mt-5">
         <div class="progress">
          <div
            class="progress-bar progress-bar-success"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{ width: items.length * 10 + '%' }"
          >
            {{ items.length * 10 }}% Full
          </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['items']
};
</script>
