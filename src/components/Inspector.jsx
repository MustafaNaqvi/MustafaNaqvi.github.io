const stats = [
  { key: 'experience', value: '"6+ years"', color: 'g' },
  { key: 'downloads', value: '"16M+"', color: 'g' },
  { key: 'latency', value: '"<120ms"', color: 'gr' },
  { key: 'concurrent', value: '"40+ players"', color: 'gr' },
]

const skills = [
  'Unity', 'C#', 'Node.js', 'NestJS', 'MongoDB', 'Socket.IO', 'React', 'WebGL', 'Firebase', 'Jenkins'
]

function PropertyRow({ pk, pv, color = '' }) {
  const getColor = () => {
    switch (color) {
      case 'g': return 'var(--gold)'
      case 'gr': return 'var(--green)'
      case 'b': return 'var(--blue)'
      case 'o': return 'var(--orange)'
      default: return 'var(--tx)'
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '20px',
        padding: '0 8px',
        borderBottom: '1px solid var(--b)',
      }}
    >
      <span
        style={{
          fontFamily: "'Consolas', monospace",
          fontSize: '10px',
          color: 'var(--td)',
          width: '90px',
          flexShrink: 0,
        }}
      >
        {pk}
      </span>
      <span
        style={{
          fontFamily: "'Consolas', monospace",
          fontSize: '10px',
          color: getColor(),
          flex: 1,
          background: 'var(--bg)',
          padding: '0 5px',
          height: '15px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '1px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {pv}
      </span>
    </div>
  )
}

function ComponentHeader({ icon, iconBg, iconColor, label }) {
  return (
    <div
      style={{
        height: '23px',
        background: 'var(--p2)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        gap: '5px',
        cursor: 'pointer',
        borderBottom: '1px solid var(--b)',
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--p3)'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'var(--p2)'}
    >
      <span style={{ fontSize: '8px', color: 'var(--tm)' }}>▼</span>
      <div
        style={{
          width: '14px',
          height: '14px',
          borderRadius: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '9px',
          background: iconBg,
          color: iconColor,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <span
        style={{
          fontFamily: "'Consolas', monospace",
          fontSize: '10px',
          color: 'var(--tx)',
          flex: 1,
        }}
      >
        {label}
      </span>
    </div>
  )
}

export default function Inspector() {
  return (
    <div
      className="rail"
      style={{
        background: 'var(--p)',
        position: 'sticky',
        top: '40px',
        height: 'calc(100vh - 40px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Rail Header */}
      <div
        style={{
          height: '26px',
          background: 'var(--p2)',
          borderBottom: '1px solid var(--b)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          fontFamily: "'Consolas', monospace",
          fontSize: '10px',
          color: 'var(--td)',
          letterSpacing: '0.4px',
          flexShrink: 0,
        }}
      >
        Inspector
      </div>

      {/* Scrollable Content */}
      <div style={{ overflowY: 'auto', flex: 1 }}>
        {/* Developer Header */}
        <div
          style={{
            padding: '8px 10px',
            borderBottom: '1px solid var(--b)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '5px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              background: 'var(--p2)',
              border: '1px solid var(--b2)',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '7px',
              color: 'var(--blue)',
              flexShrink: 0,
              marginTop: '2px',
            }}
          >
            ✓
          </div>
          <div>
            <div style={{ fontSize: '13px', color: '#eee', fontWeight: 500 }}>
              Mustafa Naqvi
            </div>
            <div
              style={{
                fontFamily: "'Consolas', monospace",
                fontSize: '9px',
                color: 'var(--td)',
                background: 'var(--p2)',
                border: '1px solid var(--b2)',
                padding: '1px 5px',
                borderRadius: '2px',
                display: 'inline-block',
                marginTop: '3px',
              }}
            >
              Tag: Player
            </div>
          </div>
        </div>

        {/* Transform Component */}
        <div style={{ borderBottom: '1px solid var(--b)' }}>
          <ComponentHeader icon="⊞" iconBg="#1e2d3d" iconColor="var(--blue)" label="Transform" />
          <PropertyRow pk="location" pv='"Islamabad, PK"' color="b" />
          <PropertyRow pk="remote" pv="true" color="gr" />
          <PropertyRow pk="relocate" pv="true" color="gr" />
        </div>

        {/* Stats Component */}
        <div style={{ borderBottom: '1px solid var(--b)' }}>
          <ComponentHeader icon="⊟" iconBg="#2a1e0e" iconColor="var(--orange)" label="Stats" />
          {stats.map((stat) => (
            <PropertyRow key={stat.key} pk={stat.key} pv={stat.value} color={stat.color} />
          ))}
        </div>

        {/* Skills Component */}
        <div style={{ borderBottom: '1px solid var(--b)' }}>
          <ComponentHeader icon="⊟" iconBg="#1a2d1a" iconColor="var(--green)" label={`Skills (${skills.length})`} />
          {skills.map((skill, i) => (
            <PropertyRow key={skill} pk={`[${i}]`} pv={`"${skill}"`} color="b" />
          ))}
        </div>

        {/* Availability Component */}
        <div style={{ borderBottom: '1px solid var(--b)' }}>
          <ComponentHeader icon="◉" iconBg="#1a2a1a" iconColor="var(--green)" label="Availability" />
          <PropertyRow pk="status" pv="Open to work" color="gr" />
          <PropertyRow pk="type" pv='"FT / Contract"' />
          <PropertyRow pk="focus" pv='"Backend + MP"' color="g" />
          <PropertyRow pk="response" pv="24h" color="gr" />
        </div>

        {/* Add Component Button */}
        <div
          style={{
            margin: '8px',
            height: '22px',
            background: 'var(--p2)',
            border: '1px solid var(--b2)',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Consolas', monospace",
            fontSize: '10px',
            color: 'var(--tm)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--gold)'
            e.currentTarget.style.color = 'var(--gold)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--b2)'
            e.currentTarget.style.color = 'var(--tm)'
          }}
        >
          + Add Component
        </div>
      </div>
    </div>
  )
}
