Flex Attributes
=============

This library (1kb gzipped) allows you to compose layout with flexbox in html, allowing for rapid prototyping, easy visulization of layout in HTML, and reduced CSS footprint and duplication.

Installation
------------

```
npm install flex-attributes
```

Add, import, or require `flex-attributes/flex-attributes.css` into your project.

You can compile the source files with your own breakpoints, located ./src/variables.styl with `gulp`

Attributes
------------
Containers: 
* `flex`
* `column`
* `row`
* `layout="space-between"`
* `layout="space-between center" (etc)` 
* `wrap`
* `wrap="nowrap || wrap-reverse"`

Children: 
* `grow`
* `grow="*" (0-10)`
* `shrink` 
* `shrink="*" (0-10)`
* `grid-* (1-12)` 
* `grid-sm-* (1-12)`
* `align`

Examples
------------
Containers are composed by combining `flex`, `column` or `row`, and `layout`. 

`layout` accepts 1 or 2 arguments, main axis (justify-content), then secondary axis (align-items).

 `flex row layout="space-between stretch"`

Grids are composed by using `grid-lg-*` etc.

Children are grown and shrunk with `grow="3"` or `shrink="4"`

`column` and `row`, as well as `grid-*` can be declared with a breakpoints 

`flex column row-md layout="space-between"` (will render a column on screens smaller than 970px)
 
`grid-md-6` (will render a column with flex-basis of 50%, on devices larger than 970px)

Breakpoints (Bootstrap)
------------

`xs` screens greater than 0px

`sm` screens greater than 750px

`md` screens greater than 970px

`lg` screens greater than 1170px

Contributing
------------

Go fur it
