Flex Attributes
=============

This library allows you to compose layout with flexbox in html. Containers
are composed by combining `flex-column`|`flex-row` with `flex-flow`.

`flex-column` or `flex-row` sets the element to be a flex container and sets the direction, `flex-flow` defines how children align on the main, and secondary axis.
```
flex-column="reverse nowrap" flex-flow="space-between baseline"
```

`flex-row` and `flex-column` can be shorthanded and default to the flexbox defaults

```
flex-row flex-flow="start baseline"
```

`flex-flow` can be shorthanded to just the main axis
```
flex-row flex-flow="space-between"
```

Installation
------------

```
npm install flex-attributes
bower install flex-attributes
```

Add, import, or require `flex-attributes/dist/flex-attributes.css` into your project.
