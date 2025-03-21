import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, type SvgIconTypeMap } from '@mui/material';
import { Fragment, type ReactElement, type ReactNode } from 'react';
import Pagination from './Pagination';
import QuerySearchField from './QuerySearchField';
import type { PageMetadata } from '../../api/openapi/backend';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

type CommonSearchProps<T extends { id: number }> = {
    query?: string;
    searchHelper?: string;
    actionBar?: ReactNode;
    result: {
        content?: T[];
        page?: PageMetadata;
    };
    children: (item: T) => {
        primary: ReactNode;
        secondary: ReactNode;
        onClick: React.MouseEventHandler<HTMLLIElement> | undefined;
        // eslint-disable-next-line @typescript-eslint/no-empty-object-type
        Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
            muiName: string;
        };
    };
};

type CommonSearchComponent = <T extends { id: number }>(props: CommonSearchProps<T>) => ReactElement | null;

const CommonSearch: CommonSearchComponent = ({ children, query, result, searchHelper, actionBar }) => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            gap={2}
            marginBottom={8}
        >
            <Box
                display='flex'
                flexDirection='row'
                justifyItems={'start'}
            >
                <QuerySearchField
                    query={query}
                    helperText={searchHelper}
                />
                {actionBar}
            </Box>
            <List
                sx={{ width: '100%' }}
                data-cy='search-result-list'
            >
                {result.content?.map((el, idx, arr) => {
                    const { Icon, ...currentItem } = children(el);
                    return (
                        <Fragment key={el.id}>
                            <ListItem
                                alignItems='flex-start'
                                disableGutters
                                onClick={currentItem.onClick}
                                sx={{
                                    cursor: 'pointer'
                                }}
                                data-cy='search-result-list-item'
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={currentItem.primary}
                                    secondary={currentItem.secondary}
                                    data-cy='search-result-item-content'
                                />
                            </ListItem>
                            {arr.length - 1 !== idx && <Divider component='li' />}
                        </Fragment>
                    );
                })}
            </List>
            <Divider />
            <Pagination pageMetadata={result.page} />
        </Box>
    );
};
export default CommonSearch;
