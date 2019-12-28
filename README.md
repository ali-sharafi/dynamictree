# vuejs-magnifier
A dynamic tree in vuejs

## Demo
For a demo, please visit here: https://codepen.io/ali-sharafi/full/dyPzdbg

## Installation
**Npm:**

```shell
$ npm i dynamictree
```

## Live Playground

To run that demo on your own computer:

* Clone this repository
* `npm install`
* `npm run build` 
* `npm run storybook` 
* Visit `http://localhost:9001/`

## Usage

```html
  <!-- Vue Component -->
  <template>
    <dynamic-tree 
    :options="options"
    :parents="parents"
    :data="data"
    :checked-list="checkedList"
    />

  </template>

  <script>
    import Vue from 'Vue'
    import DynamicTree from 'dynamictree'

    Vue.use(DynamicTree)

    export default {
        data(){
            return {
                //options of your liquor tree
                options:{
                    checkbox: true,
                    direction: "ltr",
                    ...LiquorTree options
                },
                //Parent node of your tree
                parents:[
                    {name:'parent1',id:1,parent_id:null},
                    {name:'parent2',id:2,parent_id:null},
                    {name:'parent3',id:3,parent_id:null},
                ],
                //All of your data maybe contain your parents or not
                data:[
                    {name:'parent1',id:1,parent_id:null},
                    {name:'parent2',id:2,parent_id:null},
                    {name:'parent3',id:3,parent_id:null},
                    {name:'child1',id:4,parent_id:1},
                    {name:'child2',id:5,parent_id:4},
                    {name:'child3',id:6,parent_id:5},
                ],
                //Items must be checked in first render tree
                checkedList:[1,2,5,6]
            }
        }
      ...
      ...
    }
  </script>
```

## Development

Check out the `package.json`s script section. There are 2 scripts:

- `npm run dev` - it will open browser and you can *play* with code
- `npm run build` - it will craete a module file in `production` mode 
