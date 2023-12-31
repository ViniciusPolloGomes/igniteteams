import { Container} from './styles';
import { Header } from '@components/Header';
import {HighLight} from '@components/HighLight';
import {GroupCard} from '@components/GroupCard'
import { useState } from 'react';
import {FlatList} from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';


export default function Groups() {
  const [groups,setGroups] = useState<string[]>(['Galera da rocket', 'Amigos']);
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
        
      />
    </Container>
  );
}

