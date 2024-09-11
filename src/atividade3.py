import unittest

def converter_massa_lunar(peso_terra):
    gravidade_terra = 9.8
    gravidade_lua = 1.6
    peso_lua = peso_terra * (gravidade_lua / gravidade_terra)
    return peso_lua

def converter_massa_marte(peso_terra):
    gravidade_terra = 9.8
    gravidade_marte = 3.7
    peso_marte = peso_terra * (gravidade_marte / gravidade_terra)
    return peso_marte

class TestConversores(unittest.TestCase):

    def test_converter_massa_lunar(self):
        peso_terra = 100
        esperado = 100 * (1.6 / 9.8)
        resultado = converter_massa_lunar(peso_terra)
        self.assertAlmostEqual(esperado, resultado, places=2)

        peso_terra = 0
        esperado = 0 * (1.6 / 9.8)
        resultado = converter_massa_lunar(peso_terra)
        self.assertAlmostEqual(esperado, resultado, places=2)

        peso_terra = -50
        esperado = -50 * (1.6 / 9.8)
        resultado = converter_massa_lunar(peso_terra)
        self.assertAlmostEqual(esperado, resultado, places=2)

    def test_converter_massa_marte(self):
        peso_terra = 100
        esperado = 100 * (3.7 / 9.8)
        resultado = converter_massa_marte(peso_terra)
        self.assertAlmostEqual(esperado, resultado, places=2)

        peso_terra = 0
        esperado = 0 * (3.7 / 9.8)
        resultado = converter_massa_marte(peso_terra)
        self.assertAlmostEqual(esperado, resultado, places=2)

        peso_terra = -50
        esperado = -50 * (3.7 / 9.8)
        resultado = converter_massa_marte(peso_terra)
        self.assertAlmostEqual(esperado, resultado, places=2)

if __name__ == '__main__':
    unittest.main()
