const commonStyles = {
    border: '1px solid black',
};
const thTdStyles = {
    ...commonStyles,
    padding: '0.25rem 1rem',
};
const tableStyle = {
    ...commonStyles,
    borderCollapse: 'collapse',
};

export const Table: React.SFC<any> = ({ style, ...otherProps }) => (
    <table
        style={{ ...tableStyle, ...style }}
        {...otherProps}
    />
);

export const Td: React.SFC<any> = ({ style, ...otherProps }) => (
    <td
        style={{ ...thTdStyles, ...style }}
        {...otherProps}
    />
);

export const Th: React.SFC<any> = ({ style, ...otherProps }) => (
    <td
        style={{ ...thTdStyles, ...style }}
        {...otherProps}
    />
);
