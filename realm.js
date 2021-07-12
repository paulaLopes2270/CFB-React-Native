import Realm from 'realm';
import PostSchema from '../app1/schemas/PostSchema'
export default function getRealm () {
  return Realm.open({
    schema: [PostSchema]
  })
}