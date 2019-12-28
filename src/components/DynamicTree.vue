<template>
  <tree
    ref="tree"
    v-model="tree"
    :data="treeData"
    v-if="treeData && treeData.length>0"
    :options="options"
    style="overflow:hidden"
  />
</template>

<script>
import LiquorTree from "liquor-tree";
import collect from "collect.js";
export default {
  name: "DynamicTree",
  components: {
    [LiquorTree.name]: LiquorTree
  },
  props: {
    options: Object,
    parents: Array,
    data: Array,
    checkedList: {
      type: Array,
      default: new Array()
    }
  },
  data() {
    return {
      tree: [],
      treeData: []
    };
  },
  watch: {
    tree(newValue) {
      let per = collect(newValue.checked)
        .where("children.length", 0)
        .pluck("id")
        .toArray();
      let checkedItem = per.filter(i => i);
      this.$emit("checked:item", checkedItem);
    }
  },
  mounted() {
    this.loadTree();
  },
  methods: {
    loadTree() {
      this.parents.forEach(node => {
        let parent = {
          state: {
            checked: false,
            expanded: false
          }
        };
        parent.text = node.name;
        parent.id = node.id;
        parent.state.checked = this.checkedList.includes(Number(node.id));
        parent.state.expanded = this.checkedList.includes(Number(node.id));
        parent.children = [];
        let newNode = this.createTree(parent);
        this.treeData.push(newNode);
      });
    },
    createTree(node) {
      this.data.forEach(child => {
        if (child.parent_id == node.id) {
          let children = {
            state: { checked: false, expanded: false }
          };
          children.text = child.name;
          children.id = child.id;
          children.state.checked = this.checkedList.includes(Number(child.id));
          children.state.expanded = this.checkedList.includes(Number(child.id));
          children.children = [];
          this.createTree(children);
          node.children.push(children);
        }
      });
      return node;
    }
  }
};
</script>