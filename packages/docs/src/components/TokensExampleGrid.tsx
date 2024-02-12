interface TokenExampleGridProps {
  type:
    | 'fontSizes'
    | 'fontWeights'
    | 'fonts'
    | 'lineHeights'
    | 'radii'
    | 'space'
  value: string
}

export function TokenExampleGrid({ type, value }: TokenExampleGridProps) {
  switch (type) {
    case 'fontSizes':
      return (
        <td style={{ alignItems: 'center' }}>
          <p
            style={{
              fontSize: `${value}`,
              fontFamily: 'monospace',
              color: '#FFF',
            }}
          >
            Texto de exemplo.
          </p>
        </td>
      )

    case 'fontWeights':
      return (
        <td style={{ alignItems: 'center' }}>
          <p
            style={{
              fontWeight: `${value}`,
              fontSize: 18,
              fontFamily: 'monospace',
              color: '#FFF',
            }}
          >
            Texto de exemplo para demonstrar o peso da fonte.
          </p>
        </td>
      )
    case 'fonts':
      return (
        <td style={{ alignItems: 'center' }}>
          <p
            style={{
              fontFamily: `${value}`,
              fontSize: 18,
              color: '#FFF',
            }}
          >
            Texto de exemplo para demonstrar o estilo da fonte.
          </p>
        </td>
      )
    case 'lineHeights':
      return (
        <td style={{ alignItems: 'center' }}>
          <p
            style={{
              lineHeight: `${value}`,
              fontFamily: 'monospace',
              fontSize: 18,
              color: '#FFF',
            }}
          >
            A propriedade CSS line-height define a altura de uma linha e o
            espaçamento entre as linhas de um texto. A distância é medida entre
            as linhas de base (baseline) de duas linhas consecutivas.
          </p>
        </td>
      )
    case 'radii':
      return (
        <td style={{ alignItems: 'center' }}>
          <div
            style={{
              backgroundColor: '#22D3EE',
              width: 40,
              height: 40,
              borderRadius: `${value}`,
            }}
          />
        </td>
      )
    case 'space':
      console.log('value', value)
      return (
        <td style={{ alignItems: 'center' }}>
          <div
            style={{
              width: `${value}`,
              height: '16px',
              backgroundColor: '#22D3EE',
            }}
          />
        </td>
      )
    default:
      return <span>{value}</span>
  }
}
