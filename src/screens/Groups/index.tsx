import { Container} from './styles';
import { Header } from '@components/Header';
import {HighLight} from '@components/HighLight';
import {GroupCard} from '@components/GroupCard'
import {  useState , useCallback } from 'react';
import {FlatList} from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect} from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupGetAll';


export  function Groups() {
  const [groups,setGroups] = useState<string[]>([]);
  
  const navigation = useNavigation();
  function handleNewGroup (){
    navigation.navigate('new')
  }

  async function fetchGroup(){
    try{
      const data = await groupsGetAll();
      setGroups(data)
    }catch(error){
      console.log(error)
    }
  }

  useFocusEffect(useCallback(
      ()=>{
        fetchGroup();
      },[])
  );

  return (
    <Container>
        <Header/>
        <HighLight
          title="Turmas"
          subtitle="jogue com a sua turma"
        />

        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({item})=> (
            <GroupCard 
              title={item}
            />
          )}
          contentContainerStyle={groups.length === 0 && {flex : 1 }}
          ListEmptyComponent={()=>(
            <ListEmpty
              message="Que tal cadastrar uma nova turma?"
            />
          )}
        />
      <Button
        title="Criar nova Turma"
        onPress={handleNewGroup}
      />
    </Container>
  );
}

