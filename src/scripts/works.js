import Vue from "vue";

const thumbs = {
    props: ["works", "currentWork"],
    template: "#preview-thumbs"
}

const btns = {
    template: "#preview-btns"
};

const display = { 
    props: ["currentWork", "works", "currentIndex"],
    template: "#preview-display",
    components: {thumbs, btns},
    computed: {
        reversedWorks() {
            const works = [...this.works];
            return works.slice(0, 3).reverse();
        }
    }
};

const tags = {
    props: ["tags"],
    template: "#preview-tags"
}

const info = {
    props: ["currentWork"],
    template: "#preview-info",
    components: { tags },
    computed: {
        tagsArray() {
            return this.currentWork.skill.split(",");
        }
    }
};


new Vue({
    el: "#preview-component",
    template: "#preview-container",
    components: {display, info},
    data() {
        return {
            works: [],
            currentWork: {},
            currentIndex: 0
        }
    },
    computed: {
        currentWork() {
            // return this.works[this.currentIndex];
            return this.works[0];
        }
    },
    watch: {
        currentIndex(value) {
            this.makeInfiniteLoopForNdx(value);
        },
    },
    methods: {
        makeInfiniteLoopForNdx(index) {
            const workNumber = this.works.length - 1
            if (index < 0) this.currentIndex = workNumber;
            if (index > workNumber - 1) this.currentIndex = 0;
        },
        requireImagesToArray(data) {
            return data.map(item => {
                const requiredImage = require(`../images/${item.photo}`).default;
                item.photo = requiredImage;
                return item
            });
        },
        slide(direction) {
            const lastItem = this.works[this.works.length -1];
            switch(direction) {
              case "next":
                this.works.push(this.works[0]);
                this.works.shift();  
              this.currentIndex++;
              case "prev":
                this.works.unshift(lastItem);
                this.works.pop();
                 this.currentIndex--;
            }
        },
    },
    created() {
        const data = require("../data/works.json");
        this.works = this.requireImagesToArray(data);
    }
});