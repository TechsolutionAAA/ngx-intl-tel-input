/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';
import '@phuocng/rpv-current-page/cjs/rpv-current-page.css';

import './defaultToolbar.less';
import ToolbarSlot, { RenderToolbarSlot } from './ToolbarSlot';

const defaultToolbar: RenderToolbarSlot = (toolbarSlot: ToolbarSlot): React.ReactElement => {
    return (
        <div className='rpv-toolbar'>
            <div className='rpv-toolbar-left'>
            </div>
            <div className='rpv-toolbar-center'>
                <div className='rpv-toolbar-item'>
                    {toolbarSlot.goToFirstPage}
                </div>
                <div className='rpv-toolbar-item'>
                    {toolbarSlot.previousPage}
                </div>
                <div className='rpv-toolbar-item'>
                    {toolbarSlot.currentPageInput} / {toolbarSlot.currentPage}
                </div>
                <div className='rpv-toolbar-item'>
                    {toolbarSlot.nextPage}
                </div>
                <div className='rpv-toolbar-item'>
                    {toolbarSlot.goToLastPage}
                </div>
            </div>
            <div className='rpv-toolbar-right'>
            </div>
        </div>
    );
};

export default defaultToolbar;
