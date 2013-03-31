module.exports = flatten;

function flatten(list){
  var result;

  if(!Array.isArray(list)) return list;

  result = [];

  list.forEach(function(el){

    if(!Array.isArray(el)) {
       return result.push(el);
    }

    result.push.apply(result, flatten(el));

  });

  return result;
}
