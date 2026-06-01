import { StyleSheet } from 'react-native';

export const COLORS = {
  background: '#333333',
  surface: '#222222',
  white: '#FFFFFF',

  neonBlue: '#00E5FF',
  neonGreen: '#00FF9C',
  neonYellow: '#FFD600',
  neonPink: '#FF2D95',

  neonBlueSoft: 'rgba(0, 229, 255, 0.3)',
  neonGreenSoft: 'rgba(0, 255, 156, 0.3)',
  neonPinkSoft: 'rgba(255, 45, 149, 0.3)',
};

export const FONTS = {
  title: 'Orbitron',
  body: 'Rajdhani',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    padding: 20,
    alignItems: 'center',
  },

  logo: {
    width: 180,
    height: 180,
    marginBottom: 30,
  },

  title: {
    fontFamily: FONTS.title,
    fontSize: 28,
    color: COLORS.neonPink,
    marginBottom: 30,
    textShadowColor: COLORS.neonPink,
    textShadowRadius: 15,
  },

  text: {
    marginTop: 10,
    fontFamily: FONTS.body,
    color: COLORS.white,
  },

  // TELA DE LOADING
  barBackground: {
    width: 220,
    height: 8,
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 10,
  },

  barFill: {
    height: '100%',
    backgroundColor: COLORS.neonBlue,
    shadowColor: COLORS.neonBlue,
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },

  // TELA HOME
  menuBox: {
    width: '80%',
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.neonBlue,
    borderRadius: 15,
    backgroundColor: COLORS.surface,
    shadowColor: COLORS.neonBlue,
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },

  button: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.neonPink,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: FONTS.body,
    color: COLORS.white,
    letterSpacing: 2,
  },

  // COPYRIGHT E CREDITOS
  copyright: {
    position: 'absolute',
    bottom: 50,
    fontFamily: FONTS.body,
    fontSize: 14,
    color: COLORS.white,
  },

  warning: {
    fontFamily: FONTS.body,
    fontSize: 12,
    color: '#999',
    margin: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 30,
  },

  // CARD DE INSTRUÇÔES
  card: {
    width: '100%',
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.neonBlue,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,

    shadowColor: COLORS.neonBlue,
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },

  cardTitle: {
    fontFamily: FONTS.body,
    fontSize: 16,
    color: COLORS.neonPink,
    marginBottom: 5,
  },

  cardText: {
    fontFamily: FONTS.body,
    fontSize: 14,
    color: COLORS.white,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },

  // TELA DE SELEÇÂO DE PERSONAGEM
  birdBox: {
    width: 150,
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: COLORS.neonBlue,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
  },

  birdBoxSelected: {
    borderColor: COLORS.neonPink,
    shadowColor: COLORS.neonPink,
    shadowOpacity: 0.8,
    shadowRadius: 15,
    transform: [{ scale: 1.05 }],
  },

  imageBird: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },

  nameBird: {
    fontFamily: FONTS.body,
    fontSize: 18,
    color: COLORS.white,
  },

  // TELA DO JOGO
  gameArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholder: {
    fontFamily: FONTS.title,
    fontSize: 24,
    color: COLORS.neonBlue,
    opacity: 0.5,
  },

  info: {
    marginTop: 10,
    fontFamily: FONTS.body,
    color: COLORS.white,
  },

  containerHeader: {
    width: '100%',
    paddingTop: 40,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
  },

  buttonsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // OBSTACULOS
  pipe: {
    width: 60,
    backgroundColor: COLORS.background,
    borderWidth: 2,
    marginBottom: 10,
    overflow: 'hidden',
  },

  inner: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // CONFIGURAÇÕES
  settingsButton: {
    width: '85%',
    padding: 15,
    marginVertical: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderWidth: 1,
    borderColor: COLORS.neonBlue,
    borderRadius: 12,
    backgroundColor: COLORS.surface,

    shadowColor: COLORS.neonBlue,
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },

  settingsButtonActive: {
    borderColor: COLORS.neonGreen,
    shadowColor: COLORS.neonGreen,
  },

  settingsButtonText: {
    fontFamily: FONTS.body,
    fontSize: 14,
    letterSpacing: 1,
    color: COLORS.white,
  },
});
