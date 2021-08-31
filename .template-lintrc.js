'use strict';

module.exports = {
  
  extends: 'octane',

  rules: {

    'attribute-indentation':{
      'open-invocation-max-len' : 100
    },
    'block-indentation': 2,   
    'deprecated-render-helper': true,
    'require-valid-alt-text': true,
    'inline-link-to': true,
    'linebreak-style': true,
    'link-rel-noopener': true,
    'no-abstract-roles' : true,
    'no-attrs-in-components': true,
    'no-bare-strings': true,   
    'no-debugger': true,
    'no-duplicate-attributes': true,
    'no-html-comments': true,
    'no-inline-styles': true,          
    'no-input-block': true,
    'no-input-tagname': true,
    'no-invalid-interactive': true,    
    'no-log': true,
    'no-invalid-meta' : true,
    'no-nested-interactive': true,     
    'no-obsolete-elements': true,
    'no-outlet-outside-routes': true,
    'no-partial': true,
    'no-shadowed-elements': true,
    'no-triple-curlies': true,   
    'no-unbound': true,
    'no-unnecessary-component-helper': true,
    'no-unnecessary-concat': true,
    'no-unused-block-params': true,
    'quotes': 'double',                    
    'require-iframe-title' : true,
    'self-closing-void-elements': true,
    'simple-unless': true,        
    'style-concatenation': true,
    'table-groups': true,             
    'no-curly-component-invocation': true,
    'no-implicit-this': true,
    'no-args-paths': true,
    'no-action': true,
    'no-action-modifiers': true,
    'no-quoteless-attributes': true,
  }
};
