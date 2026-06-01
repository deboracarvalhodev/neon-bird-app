import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from './Estilo';

export const gameStyles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: COLORS.background,
  },

  gameArea: {
    flex: 1,
    overflow: 'hidden',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.82)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
    gap: 16,
  },

  overlayTitle: {
    fontFamily: FONTS.title,
    fontSize: 36,
    color: COLORS.neonPink,
    letterSpacing: 4,
    textShadowColor: COLORS.neonPink,
    textShadowRadius: 18,
    marginBottom: 8,
  },

  overlayBtn: {
    width: 240,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: COLORS.neonPink,
    borderRadius: 10,
    alignItems: 'center',
  },

  overlayBtnSecondary: {
    borderColor: COLORS.neonBlue,
  },

  overlayBtnText: {
    fontFamily: FONTS.body,
    color: COLORS.white,
    fontSize: 16,
    letterSpacing: 2,
  },

  // placar no Game Over 
  scoreBoard: {
    width: 260,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.neonBlue,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: COLORS.neonBlue,
    shadowOpacity: 0.6,
    shadowRadius: 12,
  },

  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },

  scoreLabel: {
    fontFamily: FONTS.body,
    color: '#999',
    fontSize: 13,
    letterSpacing: 1,
  },

  scoreValue: {
    fontFamily: FONTS.title,
    color: COLORS.neonGreen,
    fontSize: 18,
  },

  scoreDivider: {
    height: 1,
    backgroundColor: COLORS.neonBlueSoft,
  },

  // countdown
  countdownLabel: {
    fontFamily: FONTS.body,
    fontSize: 18,
    color: COLORS.white,
    letterSpacing: 6,
    opacity: 0.7,
    marginBottom: 12,
  },

  countdownNumber: {
    fontFamily: FONTS.title,
    fontSize: 120,
    color: COLORS.neonBlue,
    textShadowColor: COLORS.neonBlue,
    textShadowRadius: 30,
    lineHeight: 130,
  },
});
