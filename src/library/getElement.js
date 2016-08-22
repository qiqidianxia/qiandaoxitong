/**
 * Created by qoder on 16/8/21.
 */
const _$=function(id) {
  if(id){
    return document.getElementaById(id);
  }else{
    return false;
  }
};

export default _$;
