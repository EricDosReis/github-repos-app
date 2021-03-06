import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  border-bottom-width: 1px;
  border-color: #eee;
  flex-direction: row;
  padding-bottom: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #eee;
  border: 1px solid #eee;
  border-radius: 4px;
  flex: 1;
  height: 40px;
  padding: 0 16px;
`;

export const SubmitButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
  padding: 0 12px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  background: #eee;
  border-radius: 32px;
  height: 64px;
  width: 64px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #999;
  font-size: 13px;
  line-height: 18px;
  margin-top: 4px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  align-items: center;
  align-self: stretch;
  justify-content: center;
  background: #7159c1;
  border-radius: 4px;
  height: 36px;
  margin-top: 10px;
`;

export const ProfileButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;
