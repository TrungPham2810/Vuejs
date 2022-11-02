<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center">
        <form class="text-center">
          <div class="form-group row mt-5">
            <label for="inputName" class="col-sm-1-12 col-form-label"></label>
            <textarea
              type="text"
              v-model="item"
              class="form-control"
              name="inputName"
              id="inputName"
              placeholder=""
            />
          </div>

          <div class="form-group row">
            <div class="offset-sm-2 col-sm-10">
              <button
                type="submit"
                @click.prevent="createNew"
                class="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: "",
    };
  },
  methods: {
    createNew: function () {
      if (this.item != "") {
        this.$emit("itemAdded", this.item);
        this.item = "";
      }
    },
  },
};
</script>
