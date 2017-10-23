import glamorous from 'glamorous-native';

const getColorFromTheme = ({ theme: { colors } }) => ({
  color: colors.main,
});

export const Container = glamorous.view({
  flex: 1,
  flexDirection: 'column',
});

export const SectionContainer = glamorous.view({
  flex: 1,
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'center',
});

export const Section = glamorous.view({
  flexDirection: 'row',
  flex: 1,
  alignContent: 'space-between',
  alignItems: 'baseline',
  padding: 10,
});

export const Title = glamorous.text(
  {
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
  },
  getColorFromTheme
);

export const Label = glamorous.text(
  {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'orbitron-bold',
    paddingBottom: 4,
  },
  getColorFromTheme
);

export const Value = glamorous.text(
  {
    fontSize: 32,
    textAlign: 'right',
    flex: 1,
    fontFamily: 'orbitron-bold',
    paddingRight: 4,
  },
  getColorFromTheme
);
