/*
 * This file is part of Cockpit.
 *
 * Copyright (C) 2017 Red Hat, Inc.
 *
 * Cockpit is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * Cockpit is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Cockpit; If not, see <http://www.gnu.org/licenses/>.
 */

import cockpit from 'cockpit';
import React from 'react';
import { Alert, Card, CardTitle, CardBody, Menu, MenuList, MenuItem, Grid, GridItem } from '@patternfly/react-core';
// import $ from 'jquery';

const _ = cockpit.gettext;

export class Application extends React.Component {
    constructor() {
        super();
        this.state = { hostname: _("Unknown") };

        // const process = cockpit.spawn("whoami");
        // $.ajax({
        //     url:""
        // })
        cockpit.file('/etc/hostname').watch(content => {
            this.setState({ hostname: content.trim() });
        });
    }

    render() {
        return (
            <Card>
                <CardTitle>Starter Kit</CardTitle>
                <CardBody>
                    <Grid hasGutter>
                        <GridItem span={1}>
                            <Menu>
                                <MenuList>
                                    <MenuItem>Test</MenuItem>
                                </MenuList>
                            </Menu>
                        </GridItem>
                        <GridItem span={6}>
                            <Alert
                                variant="info"
                                title={ cockpit.format(_("Running on $0"), this.state.hostname) }
                            />
                        </GridItem>
                    </Grid>
                </CardBody>
            </Card>
        );
    }
}
